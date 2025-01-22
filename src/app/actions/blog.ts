"use server";

import { prisma } from "@/lib/prisma";

export async function getPosts() {
    return await prisma.post.findMany({
        take: 10,
        include: {
            author: true,
        }
    });
}