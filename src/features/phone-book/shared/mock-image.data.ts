const encodeSvg = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

type LogoPalette = {
  bg: string;
  accent: string;
  text: string;
};

export function createCompanyLogoSvg(initials: string, palette: LogoPalette) {
  return encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="16" fill="${palette.bg}" />
      <circle cx="46" cy="14" r="10" fill="${palette.accent}" fill-opacity="0.22" />
      <circle cx="15" cy="47" r="12" fill="#ffffff" fill-opacity="0.18" />
      <text
        x="30"
        y="36"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="21"
        font-weight="700"
        fill="${palette.text}"
      >
        ${initials}
      </text>
    </svg>
  `);
}

export const contactAvatarSrc = encodeSvg(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="10" r="5.25" fill="#ffffff" />
    <path
      d="M7.5 24.375C7.5 20.2329 10.8579 16.875 15 16.875C19.1421 16.875 22.5 20.2329 22.5 24.375"
      stroke="#ffffff"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
`);
