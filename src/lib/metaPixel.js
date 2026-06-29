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

  if (eventId) {
    ReactPixel.track(eventName, data, {
      eventID: eventId,
    });
  } else {
    ReactPixel.track(eventName, data);
  }
};

export const createEventId = (prefix) => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};



