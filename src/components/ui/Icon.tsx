import {
  type LucideIcon,
  Scissors,
  Diamond,
  Menu,
  X,
  Plus,
  Sparkles,
  Users,
  Lightbulb,
  Wallet,
  Gem,
  GraduationCap,
  Briefcase,
  Home,
  TrendingUp,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ClipboardList,
  UserRoundCheck,
  CalendarDays,
  Shirt,
  Plane,
  Check,
  Play,
} from "lucide-react";

const ICONS = {
  scissors: Scissors,
  diamond: Diamond,
  menu: Menu,
  close: X,
  plus: Plus,
  sparkles: Sparkles,
  users: Users,
  lightbulb: Lightbulb,
  wallet: Wallet,
  gem: Gem,
  graduation: GraduationCap,
  briefcase: Briefcase,
  home: Home,
  trending: TrendingUp,
  arrowUpRight: ArrowUpRight,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  mapPin: MapPin,
  clipboardList: ClipboardList,
  userCheck: UserRoundCheck,
  calendar: CalendarDays,
  shirt: Shirt,
  plane: Plane,
  check: Check,
  play: Play,
} as const;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function Icon({
  name,
  size = 16,
  className = "",
  strokeWidth = 1.75,
}: IconProps) {
  const LucideComponent: LucideIcon = ICONS[name];

  return (
    <LucideComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  );
}
