// this file exists because you can't do `text-${color}` in tailwindcss. 
export function getBorderColor(tier: string) {
  switch (tier) {
    case "s":
      return "tier-s-border"
    case "a":
      return "tier-a-border"
    case "b":
      return "tier-b-border"
    case "c":
      return "tier-c-border"
    case "d":
      return "tier-d-border"

  }
  /*  switch (tier) {
      case "a":
        return "text-tier-[#2BDBA3]"
      case "b":
        return "text-tier-[#E2FF04]"
      case "c":
        return "text-tier-[#EE8A1F]"
      case "d":
        return "text-tier-[#EDE6FE]"
}
      */
  return " "
}

export function getTextColor(tier: string) {
  switch (tier) {
    case "s":
      //     return "text-tier-s"
      return "tier-s-text"
    case "a":
      //  return "text-tier-a"
      return "tier-a-text"
    case "b":
      //return "text-tier-b"
      return "tier-b-text"
    case "c":
      //return "text-tier-c"
      return "tier-c-text"
    case "d":
      //return "text-tier-d"
      return "tier-d-text"
  }

  return [' ']

}

export function starColor(tier: string) {
  switch (tier) {
    case "s":
      return ['tier-s-text', 'tier-s-text', 'tier-s-text', 'tier-s-text']
    case "a":
      return ['tier-a-text', 'tier-a-text', 'tier-a-text', 'neutral-star']
    case "b":
      return ['tier-b-text', 'tier-b-text', 'neutral-star', 'neutral-star']
    case "c":
      return ['tier-c-text', 'neutral-star', 'neutral-star', 'neutral-star']
    case "d":
      return ['neutral-star', 'neutral-star', 'neutral-star', 'neutral-star']
  }

  return [' ']
}
