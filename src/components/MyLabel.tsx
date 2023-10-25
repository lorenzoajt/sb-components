import './MyLabel.css'

export interface MylabelProps {
    /**
    *Text to display
    */ 
    label: string
    /**
    *Label Size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3'
    /**
    * Transform text to uppercase
    */
    allCaps?: boolean
    /**
    *Text color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
    /**
    *Font color
    */
   fontColor?: string
    /**
    *background color
    */
    backgroundColor?: string

}

export const MyLabel = ({    
    label,
    size= 'normal',
    color='text-primary',
    fontColor,
    allCaps= false,
    backgroundColor='transparent'
}:MylabelProps) => {    
  return (
    <span style={{        
        color: fontColor,
        backgroundColor
    }} className={`${ size } ${ color } label`}>{ allCaps ? label.toUpperCase() : label }</span>
  )
}
