"use client";

import { Post, User } from "@prisma/client";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

// type PostProps = {

// }

export default function PostCard(data : {post: Post, user: User}) {
    return (
      <Card>
        <CardTitle>{data.post.title}</CardTitle>
        <CardContent>
          <p>
            {data.post.content}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>Written by: {data.user.name}</p>
          <p>Posted: {data.post.createdAt.toDateString()}</p>
        </CardFooter>
      </Card>
    );
}