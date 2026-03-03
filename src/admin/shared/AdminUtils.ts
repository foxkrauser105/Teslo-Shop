import { StringUtils } from "@/shared/utils/stringUtils";

export const getUserInitials = (userName: string | undefined): string => {
    
    if (StringUtils.StringIsNullEmptyOrWhiteSpace(userName)){
      return "";
    }
    
    if (userName!.length <= 3 || !userName!.includes(" ")){
      return `${userName![0]}${userName![userName!.length - 1]}`.toLocaleUpperCase();
    } 
    
    const initials = userName!.split(" ");
    if (StringUtils.StringIsNullEmptyOrWhiteSpace(initials[0]) && StringUtils.StringIsNullEmptyOrWhiteSpace(initials[1])) {
      return "";
    }

    if (!StringUtils.StringIsNullEmptyOrWhiteSpace(initials[0]) && StringUtils.StringIsNullEmptyOrWhiteSpace(initials[1])) {
      return getUserInitials(initials[0]);
    }

    if (StringUtils.StringIsNullEmptyOrWhiteSpace(initials[0]) && !StringUtils.StringIsNullEmptyOrWhiteSpace(initials[1])) {
      return getUserInitials(initials[1]);
    }

    return `${initials[0][0]}${initials[1][0]}`.toLocaleUpperCase();
}