// this file exists because you can't do `text-${color}` in tailwindcss. 
export function getBorderColor(tier: string) {
  switch (tier) {
    case "s":
      return "text-tier-s"
    case "a":
      return "text-tier-a"
    case "b":
      return "text-tier-b"
    case "c":
      return "text-tier-c"
    case "d":
      return "text-tier-d"
      return " "
  }
}
export function getTextColor(tier: string) {
  switch (tier) {
    case "s":
      return "text-tier-s"
    case "a":
      return "text-tier-a"
    case "b":
      return "text-tier-b"
    case "c":
      return "text-tier-c"
    case "d":
      return "text-tier-d"
  }

  return ['tier-[#6833D0]', 'tier-[#6833D0]', 'tier-[#6833D0]', 'tier-[#6833D0]']

}

export function starColor(tier: string) {
  switch (tier) {
    case "s":
      return ['text-tier-s', 'text-tier-s', 'text-tier-s', 'text-tier-s']
    case "a":
      return ['text-tier-a', 'text-tier-a', 'text-tier-a', 'text-[#6833D0]']
    case "b":
      return ['text-tier-b', 'text-tier-b', 'text-[#6833D0]', 'text-[#6833D0]']
    case "c":
      return ['text-tier-c', 'text-[#6833D0]', 'text-[#6833D0]', 'text-[#6833D0]']
    case "d":
      return ['text-[#6833D0]', 'text-[#6833D0]', 'text-[#6833D0]', 'text-[#6833D0]']
  }

  return [' ']
}
