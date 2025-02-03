import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
} from "html-react-parser";
import { cn } from "@/shared/lib/cn";

type IconParserProps = {
  icon: string;
  className?: string;
};

export function IconParser({ icon, className }: IconParserProps) {
  return parse(icon, {
    replace(domNode) {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name === "svg"
      ) {
        const { className: propsClassName, ...props } = attributesToProps(
          domNode.attribs,
        ) as React.SVGProps<SVGSVGElement>;
        return (
          <svg className={cn(className, propsClassName)} {...props}>
            {domToReact(domNode.children as DOMNode[])}
          </svg>
        );
      }
    },
  });
}
