import { cn } from "@/shared/lib/cn";
import { ScrollArea, ScrollBar } from "./scroll-area";

type TableProps = React.ComponentPropsWithRef<"table">;

function Table({ className, ...props }: TableProps) {
  return (
    <ScrollArea>
      <div className="relative w-full">
        <table
          className={cn("w-full caption-bottom ~text-sm/base", className)}
          {...props}
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

Table.displayName = "Table";

type TableHeaderProps = React.ComponentPropsWithRef<"thead">;

const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  return <thead className={cn("[&_tr]:border-none", className)} {...props} />;
};

TableHeader.displayName = "TableHeader";

type TableBodyProps = React.ComponentPropsWithRef<"tbody">;

const TableBody = ({ className, ...props }: TableBodyProps) => {
  return (
    <tbody
      className={cn(
        "[&_tr:last-child]:border-0 [&_tr:last-child>td]:pb-0",
        className
      )}
      {...props}
    />
  );
};
TableBody.displayName = "TableBody";

type TableFooterProps = React.ComponentPropsWithRef<"tfoot">;

const TableFooter = ({ className, ...props }: TableFooterProps) => {
  return (
    <tfoot
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
};
TableFooter.displayName = "TableFooter";

type TableRowProps = React.ComponentPropsWithRef<"tr">;

const TableRow = ({ className, ...props }: TableRowProps) => {
  return (
    <tr
      className={cn(
        "border-b border-stroke transition-colors [&>*+*]:pl-3",
        className
      )}
      {...props}
    />
  );
};

TableRow.displayName = "TableRow";

type TableHeadProps = React.ComponentPropsWithRef<"th">;

function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        "text-left align-middle font-normal ~pb-0/1 text-sm text-muted",
        className
      )}
      {...props}
    />
  );
}
TableHead.displayName = "TableHead";

type TableCellProps = React.ComponentPropsWithRef<"td">;

const TableCell = ({ className, ...props }: TableCellProps) => {
  return <td className={cn("~py-2/3 align-middle", className)} {...props} />;
};
TableCell.displayName = "TableCell";

type TableCaptionProps = React.ComponentPropsWithRef<"caption">;

const TableCaption = ({ className, ...props }: TableCaptionProps) => {
  return (
    <caption className={cn("mt-4 text-sm text-muted", className)} {...props} />
  );
};
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
