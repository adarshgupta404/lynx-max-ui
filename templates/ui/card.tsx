import { useRef, useState, type ReactNode } from "@lynx-js/react";
import type { NodesRef, ViewProps } from "@lynx-js/types";
import { cn } from "../../utils/cn.js";

interface CardProps extends ViewProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  footer?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  footer,
  className = "",
  ...rest
}) => {
  const cardRef = useRef<NodesRef>(null);
  
  const baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden max-w-sm";
  const mergedClasses = cn(baseClasses, className);

  return (
    <view ref={cardRef} className={mergedClasses} {...rest}>
      {imageUrl && (
        <view className="w-full h-48 bg-neutral-200">
          <image className="w-full h-full object-cover" src={imageUrl} />
        </view>
      )}
      
      <view className="p-5">
        {title && (
          <text className="text-xl font-bold text-neutral-900 mb-2">{title}</text>
        )}
        
        {description && (
          <text className="text-neutral-600 mb-4">{description}</text>
        )}
        
       
      </view>
      
      {footer && (
        <view className="px-5 py-3 bg-neutral-100 border-t border-neutral-200">
          {footer}
        </view>
      )}
    </view>
  );
};

export default Card;