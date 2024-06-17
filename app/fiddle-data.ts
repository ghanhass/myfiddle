import { CodePositionData } from "./code-position-data";

export interface FiddleData {
    id?:number,
    js?:string,
    html?:string,
    css?:string,
    user_id?:string,
    title?:string,
    layout?:number,
    html_part_size?:number,
    css_part_size?:number,
    js_part_size?:number,
    code_parts_size?:number,
    main_container_size?:number,
    main_container_height?:number,
    main_container_width?:number,
    mobile_layout?:string,
    iframe_resize_value?:number,
    css_code_position_data: CodePositionData,
    html_code_position_data: CodePositionData,
    js_code_position_data: CodePositionData,
    is_mobile_mode: boolean
}