import React from "react";
import { PROJECTS } from "../../data/PROJECTS.js";

export default function ProjectCard() {
  return (
    <>
      {PROJECTS.map((post) => (
        <article
          key={post.id}
          className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-600 p-4 rounded-2xl shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
        >
          <div className="relative w-full">
            <img
              src={post.imageUrl}
              alt={post.alt}
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>
          <div className="max-w-xl">
            <div className="mt-6">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-300 hover:text-gray-400">
                <a href={post.href} target="_blank">
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 mb-2 text-sm leading-6 text-gray-200">
                {post.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
