const SCHEMA = {
  SCREEN_DESIGN_TYPES: {
    LG: 992, // Large devices (small laptops)
    MD: 768, // Medium devices (tablets)
    SM: 576, // Small devices (landscape phones)
    XL: 1200, // Extra large devices (large laptops and desktops)
    XS: 0, // Extra small devices (portrait phones)
    XXL: 1400, // Extra large devices (Bootstrap 5)
  },
};

export function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

export function isXSScreen() {
  return window.innerWidth < SCHEMA.SCREEN_DESIGN_TYPES.SM;
}

export function isSmallScreen() {
  return window.innerWidth
      >= SCHEMA.SCREEN_DESIGN_TYPES.SM && window.innerWidth < SCHEMA.SCREEN_DESIGN_TYPES.MD;
}

export function isMediumScreen() {
  return window.innerWidth
      >= SCHEMA.SCREEN_DESIGN_TYPES.MD && window.innerWidth < SCHEMA.SCREEN_DESIGN_TYPES.LG;
}

export function isLargeScreen() {
  return window.innerWidth
      >= SCHEMA.SCREEN_DESIGN_TYPES.LG && window.innerWidth < SCHEMA.SCREEN_DESIGN_TYPES.XL;
}

export function isDesktopScreen() {
  return window.innerWidth >= SCHEMA.SCREEN_DESIGN_TYPES.XL;
}

export function isXXLScreen() {
  return window.innerWidth >= SCHEMA.SCREEN_DESIGN_TYPES.XXL;
}

export default {
  isDesktopScreen,
  isMobileDevice,
};
