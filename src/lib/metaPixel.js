import ReactPixel from "react-facebook-pixel";

const pixelId = import.meta.env.VITE_META_PIXEL_ID;

export const initMetaPixel = () => {
  if (!pixelId) {
    console.warn("Meta Pixel ID is missing");
    return;
  }

  ReactPixel.init(pixelId);
  ReactPixel.pageView();
};

export const trackMetaEvent = (eventName, data = {}, eventId) => {
  if (!pixelId) return;

  ReactPixel.track(eventName, data, {
    eventID: eventId,
  });
};