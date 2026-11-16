import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    created_at:string,
}
export interface AuthUser extends User {
    email_verified_at: string;
    permissions:string[],
    roles:string[]
}
export type PaginateData <T> =  {
    data:T[];
    links:LinkType,


}

export type Comments={
    comment:string,
    user:User,
    created_at:string,
    id:number,
    can_delete:boolean

}
type LinkType ={
    first:string,
    last:string,
    prev:string | null,
    next:string | null,
}
export type Feature={
    id:string,
    name:string,
    description:string,
    user:User,
    up_votes_count:number,
    user_downVote:boolean,
    user_upVote:boolean
    comments:Comments[],
    can: {
        update:boolean,
        delete:boolean,
        comment:boolean
    },

}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: AuthUser;
    };
    ziggy: Config & { location: string };
    flash:{
        success:string | null,
    }
};
