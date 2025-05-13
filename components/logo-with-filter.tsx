import Image from "next/image"

interface LogoProps {
  className?: string
  white?: boolean
  width?: number
  height?: number
}

export default function Logo({ className = "", white = false, width = 40, height = 40 }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Ascent Asia Advisory"
      width={width}
      height={height}
      className={`${className} ${white ? "brightness-0 invert" : ""}`}
    />
  )
}
