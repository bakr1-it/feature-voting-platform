import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}
export type PaginateData <T> =  {
    data:T[];
    links:LinkType,


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
    user:User

}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
