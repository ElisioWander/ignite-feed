import styles from "./styles.module.scss"

interface AvatarProps {
  hasBorder?: boolean;
  url?: string;
}

export function Avatar({ hasBorder, url }: AvatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={url} alt="" />
  )
}