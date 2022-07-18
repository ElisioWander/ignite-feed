import styles from "./styles.module.scss"

interface AvatarProps {
  url: string;
  hasBorder?: boolean;
}

export function Avatar({ url, hasBorder }: AvatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={url} />
  )
}