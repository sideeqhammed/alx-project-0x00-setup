import { PillProps } from "@/interfaces";
import {ButtonProps} from "@/interfaces"

const Button: React.FC<PillProps & ButtonProps> = ({title, styles}) => {
  return(
    <div className="flex justify-right items-center ml-68">
      <div className={styles}>
        <button className="text-lg text-black">{title}</button>
      </div>
    </div>
  )
}

export default Button;