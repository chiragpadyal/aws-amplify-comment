/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateThread: OnCreateThreadSubscription;
  onUpdateThread: OnUpdateThreadSubscription;
  onDeleteThread: OnDeleteThreadSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
  onCreateReaction: OnCreateReactionSubscription;
  onUpdateReaction: OnUpdateReactionSubscription;
  onDeleteReaction: OnDeleteReactionSubscription;
};

export type CreateThreadInput = {
  id?: string | null;
  name: string;
};

export type ModelThreadConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelThreadConditionInput | null> | null;
  or?: Array<ModelThreadConditionInput | null> | null;
  not?: ModelThreadConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Thread = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  threadId?: Thread | null;
  content: string;
  vote?: ModelReactionConnection | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: ModelCommentConnection | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type ModelReactionConnection = {
  __typename: "ModelReactionConnection";
  items: Array<Reaction | null>;
  nextToken?: string | null;
};

export type Reaction = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: Comment | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type UpdateThreadInput = {
  id: string;
  name?: string | null;
};

export type DeleteThreadInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  content: string;
  createdAt?: string | null;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  threadPostsId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  lastModified?: ModelStringInput | null;
  likes?: ModelIntInput | null;
  dislikes?: ModelIntInput | null;
  quality?: ModelFloatInput | null;
  username?: ModelStringInput | null;
  parentId?: ModelIDInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
  threadPostsId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  createdAt?: string | null;
  lastModified?: string | null;
  likes?: number | null;
  dislikes?: number | null;
  quality?: number | null;
  username?: string | null;
  parentId?: string | null;
  threadPostsId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type CreateReactionInput = {
  id?: string | null;
  vote: number;
  commentVoteId?: string | null;
};

export type ModelReactionConditionInput = {
  vote?: ModelIntInput | null;
  and?: Array<ModelReactionConditionInput | null> | null;
  or?: Array<ModelReactionConditionInput | null> | null;
  not?: ModelReactionConditionInput | null;
  commentVoteId?: ModelIDInput | null;
};

export type UpdateReactionInput = {
  id: string;
  vote?: number | null;
  commentVoteId?: string | null;
};

export type DeleteReactionInput = {
  id: string;
};

export type ModelThreadFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelThreadFilterInput | null> | null;
  or?: Array<ModelThreadFilterInput | null> | null;
  not?: ModelThreadFilterInput | null;
};

export type ModelThreadConnection = {
  __typename: "ModelThreadConnection";
  items: Array<Thread | null>;
  nextToken?: string | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  lastModified?: ModelStringInput | null;
  likes?: ModelIntInput | null;
  dislikes?: ModelIntInput | null;
  quality?: ModelFloatInput | null;
  username?: ModelStringInput | null;
  parentId?: ModelIDInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
  threadPostsId?: ModelIDInput | null;
};

export type ModelReactionFilterInput = {
  id?: ModelIDInput | null;
  vote?: ModelIntInput | null;
  and?: Array<ModelReactionFilterInput | null> | null;
  or?: Array<ModelReactionFilterInput | null> | null;
  not?: ModelReactionFilterInput | null;
  commentVoteId?: ModelIDInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelSubscriptionThreadFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionThreadFilterInput | null> | null;
  or?: Array<ModelSubscriptionThreadFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  content?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  lastModified?: ModelSubscriptionStringInput | null;
  likes?: ModelSubscriptionIntInput | null;
  dislikes?: ModelSubscriptionIntInput | null;
  quality?: ModelSubscriptionFloatInput | null;
  username?: ModelSubscriptionStringInput | null;
  parentId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCommentFilterInput | null> | null;
  or?: Array<ModelSubscriptionCommentFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionReactionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  vote?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionReactionFilterInput | null> | null;
  or?: Array<ModelSubscriptionReactionFilterInput | null> | null;
};

export type CreateThreadMutation = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateThreadMutation = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteThreadMutation = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type CreateReactionMutation = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type UpdateReactionMutation = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type DeleteReactionMutation = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type GetThreadQuery = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListThreadsQuery = {
  __typename: "ModelThreadConnection";
  items: Array<{
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      items: Array<{
        __typename: "Reaction";
        vote: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      items: ListCommentsQuery[] | null;
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetReactionQuery = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type ListReactionsQuery = {
  __typename: "ModelReactionConnection";
  items: Array<{
    __typename: "Reaction";
    id: string;
    vote: number;
    comment?: {
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    commentVoteId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type CategoryByParentQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateThreadSubscription = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateThreadSubscription = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteThreadSubscription = {
  __typename: "Thread";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  threadId?: {
    __typename: "Thread";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  content: string;
  vote?: {
    __typename: "ModelReactionConnection";
    items: Array<{
      __typename: "Reaction";
      id: string;
      vote: number;
      createdAt: string;
      updatedAt: string;
      commentVoteId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  lastModified?: string | null;
  likes: number;
  dislikes: number;
  quality: number;
  username: string;
  parentId?: string | null;
  children?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      lastModified?: string | null;
      likes: number;
      dislikes: number;
      quality: number;
      username: string;
      parentId?: string | null;
      updatedAt: string;
      threadPostsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  threadPostsId?: string | null;
};

export type OnCreateReactionSubscription = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type OnUpdateReactionSubscription = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

export type OnDeleteReactionSubscription = {
  __typename: "Reaction";
  id: string;
  vote: number;
  comment?: {
    __typename: "Comment";
    id: string;
    threadId?: {
      __typename: "Thread";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    vote?: {
      __typename: "ModelReactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    lastModified?: string | null;
    likes: number;
    dislikes: number;
    quality: number;
    username: string;
    parentId?: string | null;
    children?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    threadPostsId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  commentVoteId?: string | null;
  owner?: string | null;
};

@Injectable({
  providedIn: "root",
})
export class APIService {
  async CreateThread(
    input: CreateThreadInput,
    condition?: ModelThreadConditionInput
  ): Promise<CreateThreadMutation> {
    const statement = `mutation CreateThread($input: CreateThreadInput!, $condition: ModelThreadConditionInput) {
        createThread(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateThreadMutation>response.data.createThread;
  }
  async UpdateThread(
    input: UpdateThreadInput,
    condition?: ModelThreadConditionInput
  ): Promise<UpdateThreadMutation> {
    const statement = `mutation UpdateThread($input: UpdateThreadInput!, $condition: ModelThreadConditionInput) {
        updateThread(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateThreadMutation>response.data.updateThread;
  }
  async DeleteThread(
    input: DeleteThreadInput,
    condition?: ModelThreadConditionInput
  ): Promise<DeleteThreadMutation> {
    const statement = `mutation DeleteThread($input: DeleteThreadInput!, $condition: ModelThreadConditionInput) {
        deleteThread(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteThreadMutation>response.data.deleteThread;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateReaction(
    input: CreateReactionInput,
    condition?: ModelReactionConditionInput
  ): Promise<CreateReactionMutation> {
    const statement = `mutation CreateReaction($input: CreateReactionInput!, $condition: ModelReactionConditionInput) {
        createReaction(input: $input, condition: $condition) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReactionMutation>response.data.createReaction;
  }
  async UpdateReaction(
    input: UpdateReactionInput,
    condition?: ModelReactionConditionInput
  ): Promise<UpdateReactionMutation> {
    const statement = `mutation UpdateReaction($input: UpdateReactionInput!, $condition: ModelReactionConditionInput) {
        updateReaction(input: $input, condition: $condition) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReactionMutation>response.data.updateReaction;
  }
  async DeleteReaction(
    input: DeleteReactionInput,
    condition?: ModelReactionConditionInput
  ): Promise<DeleteReactionMutation> {
    const statement = `mutation DeleteReaction($input: DeleteReactionInput!, $condition: ModelReactionConditionInput) {
        deleteReaction(input: $input, condition: $condition) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReactionMutation>response.data.deleteReaction;
  }
  async GetThread(id: string): Promise<GetThreadQuery> {
    const statement = `query GetThread($id: ID!) {
        getThread(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetThreadQuery>response.data.getThread;
  }
  async ListThreads(
    filter?: ModelThreadFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListThreadsQuery> {
    const statement = `query ListThreads($filter: ModelThreadFilterInput, $limit: Int, $nextToken: String) {
        listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListThreadsQuery>response.data.listThreads;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              items {
                __typename
                vote
              }
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              items {
              __typename
              id
              threadId {
                __typename
                id
                name
                createdAt
                updatedAt
                owner
              }
              content
              vote {
                __typename
                items {
                  __typename
                  vote
                }
                nextToken
              }
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              children {
                __typename
                items {
                  __typename
                  content
                }
                nextToken
              }
              }
              nextToken
            }
            updatedAt
            threadPostsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetReaction(id: string): Promise<GetReactionQuery> {
    const statement = `query GetReaction($id: ID!) {
        getReaction(id: $id) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReactionQuery>response.data.getReaction;
  }
  async ListReactions(
    filter?: ModelReactionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReactionsQuery> {
    const statement = `query ListReactions($filter: ModelReactionFilterInput, $limit: Int, $nextToken: String) {
        listReactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            vote
            comment {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            createdAt
            updatedAt
            commentVoteId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReactionsQuery>response.data.listReactions;
  }
  async CategoryByParent(
    parentId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CategoryByParentQuery> {
    const statement = `query CategoryByParent($parentId: ID!, $sortDirection: ModelSortDirection, $filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        categoryByParent(
          parentId: $parentId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      parentId,
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CategoryByParentQuery>response.data.categoryByParent;
  }
  OnCreateThreadListener(
    filter?: ModelSubscriptionThreadFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateThread">>
  > {
    const statement = `subscription OnCreateThread($filter: ModelSubscriptionThreadFilterInput, $owner: String) {
        onCreateThread(filter: $filter, owner: $owner) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateThread">>
    >;
  }

  OnUpdateThreadListener(
    filter?: ModelSubscriptionThreadFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateThread">>
  > {
    const statement = `subscription OnUpdateThread($filter: ModelSubscriptionThreadFilterInput, $owner: String) {
        onUpdateThread(filter: $filter, owner: $owner) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateThread">>
    >;
  }

  OnDeleteThreadListener(
    filter?: ModelSubscriptionThreadFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteThread">>
  > {
    const statement = `subscription OnDeleteThread($filter: ModelSubscriptionThreadFilterInput, $owner: String) {
        onDeleteThread(filter: $filter, owner: $owner) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteThread">>
    >;
  }

  OnCreateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > {
    const statement = `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
        onCreateComment(filter: $filter) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
    >;
  }

  OnUpdateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > {
    const statement = `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
        onUpdateComment(filter: $filter) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
    >;
  }

  OnDeleteCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > {
    const statement = `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
        onDeleteComment(filter: $filter) {
          __typename
          id
          threadId {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          content
          vote {
            __typename
            items {
              __typename
              id
              vote
              createdAt
              updatedAt
              commentVoteId
              owner
            }
            nextToken
          }
          createdAt
          lastModified
          likes
          dislikes
          quality
          username
          parentId
          children {
            __typename
            items {
              __typename
              id
              content
              createdAt
              lastModified
              likes
              dislikes
              quality
              username
              parentId
              updatedAt
              threadPostsId
            }
            nextToken
          }
          updatedAt
          threadPostsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
    >;
  }

  OnCreateReactionListener(
    filter?: ModelSubscriptionReactionFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReaction">>
  > {
    const statement = `subscription OnCreateReaction($filter: ModelSubscriptionReactionFilterInput, $owner: String) {
        onCreateReaction(filter: $filter, owner: $owner) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReaction">>
    >;
  }

  OnUpdateReactionListener(
    filter?: ModelSubscriptionReactionFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReaction">>
  > {
    const statement = `subscription OnUpdateReaction($filter: ModelSubscriptionReactionFilterInput, $owner: String) {
        onUpdateReaction(filter: $filter, owner: $owner) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReaction">>
    >;
  }

  OnDeleteReactionListener(
    filter?: ModelSubscriptionReactionFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReaction">>
  > {
    const statement = `subscription OnDeleteReaction($filter: ModelSubscriptionReactionFilterInput, $owner: String) {
        onDeleteReaction(filter: $filter, owner: $owner) {
          __typename
          id
          vote
          comment {
            __typename
            id
            threadId {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            content
            vote {
              __typename
              nextToken
            }
            createdAt
            lastModified
            likes
            dislikes
            quality
            username
            parentId
            children {
              __typename
              nextToken
            }
            updatedAt
            threadPostsId
          }
          createdAt
          updatedAt
          commentVoteId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReaction">>
    >;
  }
}
