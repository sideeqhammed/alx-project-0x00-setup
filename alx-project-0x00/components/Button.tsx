import { PillProps } from "@/interfaces";

const Button: React.FC<PillProps> = ({title, styles}) => {
  return(
    <div className="flex justify-end items-center">
      <div className={styles}>
        <button className="text-lg text-black">{title}</button>
      </div>
    </div>
  )
}
export default Button;