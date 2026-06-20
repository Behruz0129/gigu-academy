type SocialIconName = "instagram" | "telegram" | "youtube" | "facebook";

type SocialIconProps = {
  name: SocialIconName;
  size?: number;
  className?: string;
};

export function SocialIcon({
  name,
  size = 18,
  className = "",
}: SocialIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path
            d="M21.5 4.5 3.8 11.1c-.9.4-.9 1.6.1 1.9l4.4 1.4 1.7 5.2c.3.9 1.4 1 1.9.2l2.5-3.6 4.5 3.3c.8.6 1.9.1 2.1-.9L22.8 6c.2-1-.6-1.8-1.3-1.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M9.8 14.2 15.8 9.2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M11 10.2v3.6l3.5-1.8L11 10.2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path
            d="M14 8h2.5V5.2C15.9 5.1 14.9 5 14 5c-2.8 0-4.5 1.7-4.5 4.7V12H7v3h2.5v7H14v-7h2.7l.5-3H14v-2.1c0-.9.3-1.5 1.5-1.5Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

export type { SocialIconName };
