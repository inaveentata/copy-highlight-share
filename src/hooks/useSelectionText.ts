
import { useState, useEffect } from "react";

type DataProps = {
    showTools: boolean;
    x?: number,
    y?: number,
    selectedText?: string;
    width?: number;
};

export const useSelectionText = (ref: React.MutableRefObject<HTMLParagraphElement | null>) => {
    const [data, setData] = useState<DataProps>({ showTools: false });

    useEffect(() => {
        const onMouseup = (e: MouseEvent) => {
            const selection = window.getSelection();

            if (!selection || selection.rangeCount === 0) {
                setData({ showTools: false });
                return;
            }
            const range = selection.getRangeAt(0);
            const startNode = range.startContainer.parentNode as Element;
            const endNode = range.endContainer.parentNode as Element;

            const target = e.target as Element;
            if (target.closest('.copy-div')) {
                return;
            }

            if (!startNode?.isSameNode(ref.current) || !startNode.isSameNode(endNode)) {
                setData({
                    showTools: false,
                });
                return;
            }

            const { x, y, width } = range.getBoundingClientRect();

            if (!width) {
                setData({
                    showTools: false
                });
                return;
            }
            if (selection?.toString()) {
                setData({
                    showTools: true,
                    x: x,
                    y: y + window.scrollY - 25,
                    selectedText: selection.toString(),
                    width
                });
            }
        };

        document.addEventListener("mouseup", onMouseup);
        return () => document.removeEventListener("mouseup", onMouseup);
    }, [ref]);

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            if (e.detail > 1) {
                e.preventDefault();
            }
        };

        document.addEventListener('mousedown', handleMouseDown, false);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown, false);
        };

    }, []);

    return { data, setData };
};
