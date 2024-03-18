import React, {useCallback,useState} from "react";

export const useDragScroll = () => {
    const [node, setNode] = useState<HTMLElement>();

    const ref = useCallback((nodeEle) => {
        setNode(nodeEle);
    }, []);

    const handleMouseDown:any = useCallback((e: React.MouseEvent) => {
        if (!node) {
            return;
        }
        const startPos = {
            left: node.scrollLeft,
            top: node.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        const handleMouseMove:any = (e: React.MouseEvent) => {
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            node.scrollTop = startPos.top - dy;
            node.scrollLeft = startPos.left - dx;
            updateCursor(node);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            resetCursor(node);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [node]);

    const handleTouchStart:any = React.useCallback((e: React.TouchEvent) => {
        if (!node) {
            return;
        }
        const touch = e.touches[0];
        const startPos = {
            left: node.scrollLeft,
            top: node.scrollTop,
            x: touch.clientX,
            y: touch.clientY,
        };

        const handleTouchMove:any = (e: React.TouchEvent) => {
            const touch = e.touches[0];
            const dx = touch.clientX - startPos.x;
            const dy = touch.clientY - startPos.y;
            node.scrollTop = startPos.top - dy;
            node.scrollLeft = startPos.left - dx;
            updateCursor(node);
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            resetCursor(node);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    }, [node]);

    const updateCursor = (ele) => {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';
    };

    const resetCursor = (ele) => {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    };

    React.useEffect(() => {
        if (!node) {
            return;
        }
        node.addEventListener("mousedown", handleMouseDown);
        node.addEventListener("touchstart", handleTouchStart);
        return () => {
            node.removeEventListener("mousedown", handleMouseDown);
            node.removeEventListener("touchstart", handleTouchStart);
        };
    }, [node,handleMouseDown,handleTouchStart]);

    return [ref];
};