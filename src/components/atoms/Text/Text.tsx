import "./Text.css"

type TextProps = {
    text? : string,
    size? : string,
    color? : string,
    weight? : string,
    style? : Object,
    className? : string,
    align?: "left"| "right"| "center" | "justify",
    display? : "inline-block" | "inline" | "none" | "block"
}

const Text : React.FC <TextProps>=( {text, size, color, weight, style, className, align, display})=>{

    return (
        <span
        className={className}
        style={{
          textAlign: align,
          color: color,
          fontSize: size,
          fontWeight: weight,
          display : display,
          ...style,
        }}
        >{text}</span>
    )
}

export default Text;
