import type { JSX } from "react";
import type { FieldError } from "react-hook-form";
import { StringUtils } from '../shared/utils/stringUtils';

export const fieldError = (field: FieldError | undefined, fieldName: string, customMessage?: string): JSX.Element | undefined => {
    return field && 
    (
        <p className='text-red-500 text-sm'>
            {
                (!StringUtils.StringIsNullEmptyOrWhiteSpace(customMessage) ? 
                    customMessage :
                    `${fieldName} is required`
                )
            }
        </p>
    );
}