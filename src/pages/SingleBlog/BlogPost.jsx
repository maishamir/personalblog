import React from "react";
import "./BlogPost.scss";
import Markdown from "react-markdown";

const published = "2025-02-10T00:00:00Z";
function formatDate(rawDate) {
  return new Date(rawDate).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const markdown = `Today, I want to open up about a topic that hits close to home for many of us in tech—**imposter syndrome**. If you've ever felt like you don't belong or you're not “good enough” as a developer, you're definitely not alone. Let's dive into what imposter syndrome is, why it happens, and how we can manage it.\n\n---\n\n## What Is Imposter Syndrome?\n\nImposter syndrome is that nagging feeling that you're somehow *faking it* and that everyone else knows more than you. In a fast-moving field like software development, it's easy to compare yourself to others and think you come up short.\n\n> “I have written eleven books, but each time I think, 'Uh oh, they're going to find out now.”  \n> — Maya Angelou\n\nIf even Maya Angelou felt like an imposter, it's safe to say we're in good company!\n\n---\n\n## Why It Happens in Tech\n1. **Constant Innovation**: With new frameworks, libraries, and languages popping up, nobody can keep up with *everything*.\n2. **High Expectations**: The tech world moves quickly, and sometimes it seems like everyone else is on a rocket ship to expertise.\n3. **Comparisons**: Scrolling through social media and seeing polished projects can make you forget we all struggle behind the scenes.\n\n---\n\n## Strategies to Cope\n\n- **Keep a “Wins” Journal**: Write down things you accomplish—no matter how small. Fixed that tricky bug? Jot it down! Launched your first site? Note it!\n- **Seek Feedback**: Sometimes, getting an outside perspective can help you see your real strengths. If a friend or mentor says you're doing well, believe them!\n- **Break Down Goals**: Tackling smaller chunks of a problem can boost your confidence. Each tiny win builds momentum.\n- **Remember Your Progress**: It's easy to forget how far you've come. Take a moment to look back at older projects or code you wrote months ago. Chances are, you'll spot major improvements.\n\n---\n\n## My Personal Experience\nI still feel like an imposter from time to time—especially when I'm jumping into a new technology or seeing someone else's polished portfolio. But I've realized taking breaks helps me reset. Going for a quick hike or reading a chapter of a good book lets me come back with fresh eyes and a clearer mind.\n\n---\n\n## Final Thoughts\nAt the end of the day, remember that **everyone starts somewhere**, and no one is an expert in everything. Embrace the learning process and celebrate every step forward, no matter how small. If you're feeling that “imposter” itch, just know that you are not alone. Keep coding, keep sharing, and keep reminding yourself that you belong here.\n\nThanks for reading, and I'll catch you in the next post!\n\n— Paulina`;

function BlogPost() {
  return (
    <div className="blogpost">
      <header className="blogpost__header">
        <h1 className="blogpost__title">
          Overcoming Imposter Syndrome as a New Developer
        </h1>
        <small className="blogpost__date">
          Published {formatDate(published)}
        </small>
      </header>
      <Markdown
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="blogpost__section-title" {...props} />
          ),

          blockquote: ({ node, ...props }) => (
            <blogquote className="blogpost__quote" {...props} />
          ),

          p: ({ node, ...props }) => (
            <p className="blogpost__section-text" {...props} />
          ),

          hr: ({ node, ...props }) => (
            <hr className="blogpost__section-divider" {...props} />
          ),

          ol: ({ node, ...props }) => (
            <ol className="blogpost__list blogpost__list--ordered" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="blogpost__list blogpost__list--unordered" {...props} />
          ),
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

export default BlogPost;
