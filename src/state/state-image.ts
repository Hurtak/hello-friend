import { state } from "./state";
import { images, IImage } from "../images/images";
import { getRandomInt } from "../shared/random";
import { getBingImageOfTheDay } from "../shared/api";
import * as types from "../shared/types";

export const stateImage = {
  imageSource: "LOCAL",

  imageLocalIndex: 0,
  imageBing: { type: "INITIAL" } as types.HttpData<{
    url: string;
    title?: string;
    link?: string;
    description: string;
  }>,

  get imagesLocal(): IImage[] {
    return images;
  },

  get imageLocal(): IImage {
    return state.image.imagesLocal[state.image.imageLocalIndex];
  },

  get imageSourceWithFallback(): types.ImageSource | null {
    switch (state.image.imageSource) {
      case "LOCAL":
        return "LOCAL";
      case "BING":
        if (!state.browser.online) return "LOCAL";
        if (state.image.imageBing && state.image.imageBing.type === "ERROR")
          return "LOCAL";
        return "BING";
      default:
        return null;
    }
  },

  get imageUrl(): string | null {
    // TODO: maybe display cached image if it would be possible?

    const urlLocal = state.image.imageLocal.url;
    switch (state.image.imageSourceWithFallback) {
      case "LOCAL":
        return urlLocal;
      case "BING":
        switch (state.image.imageBing.type) {
          case "DONE":
            return state.image.imageBing.data.url;
          default:
            return null;
        }
      default:
        return null;
    }
  },

  async fetchBingImage(): Promise<void> {
    state.image.imageBing = { type: "FETCHING" };
    const imageData = await getBingImageOfTheDay();
    state.image.imageBing = imageData;
  },

  setImageSource(imageSource: types.ImageSource): void {
    state.image.imageSource = imageSource;
  },

  setImageLocalRandom() {
    const numberOfImages = state.image.imagesLocal.length;

    const index: number = (() => {
      const getIndex = () => getRandomInt(0, numberOfImages - 1);

      if (numberOfImages < 2 || state.image.imageLocalIndex === null) {
        return getIndex();
      }

      while (true) {
        const index = getIndex();
        if (index !== state.image.imageLocalIndex) {
          return index;
        }
      }
    })();

    state.image.imageLocalIndex = index;
  },

  shiftImageLocalIndex(direction: -1 | 1): void {
    let index = state.image.imageLocalIndex + direction;
    if (index > state.image.imagesLocal.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = state.image.imagesLocal.length - 1;
    }

    state.image.imageLocalIndex = index;
  }
};