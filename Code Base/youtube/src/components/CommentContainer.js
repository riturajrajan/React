import React from "react";

const comment = [
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [
      {
        name: "Rituraj",
        text: "I will become a good developer",
        replies: [
          {
            name: "Rituraj",
            text: "I will become a good developer",
            replies: [
              {
                name: "Rituraj",
                text: "I will become a good developer",
                replies: [
                  {
                    name: "Rituraj",
                    text: "I will become a good developer",
                    replies: [
                      {
                        name: "Rituraj",
                        text: "I will become a good developer",
                        replies: [
                          {
                            name: "Rituraj",
                            text: "I will become a good developer",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Rituraj",
            text: "I will become a good developer",
            replies: [],
          },
          {
            name: "Rituraj",
            text: "I will become a good developer",
            replies: [],
          },
        ],
      },
      {
        name: "Rituraj",
        text: "I will become a good developer",
        replies: [
          {
            name: "Rituraj",
            text: "I will become a good developer",
            replies: [],
          },
        ],
      },
      {
        name: "Rituraj",
        text: "I will become a good developer",
        replies: [],
      },
    ],
  },
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [],
  },
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [],
  },
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [],
  },
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [],
  },
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [],
  },
  {
    name: "Rituraj",
    text: "I will become a good developer",
    replies: [],
  },
];

const Comment = ({ comment }) => {
  const { name, text, replies } = comment;
  return (
    <div className="flex">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        className="w-8 h-8"
      />
      <div>
        <h5 className="font-bold">{name}</h5>
        <h6>{text}</h6>
      </div>
    </div>
  );
};

const CommentList = ({ userComments }) => {
  return userComments.map((item) => (
    <div className="p-2">
      <Comment comment={item} />
      <div className="p-5 border-l-2">
        <CommentList userComments={item.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="my-3">
      <CommentList userComments={comment} />
    </div>
  );
};

export default CommentContainer;
