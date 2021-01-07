import React from "react";
import "./index.css";

const NewsCard = (props) => {
  return (
        <a
          href="https://blog.openbudgetsindia.org/himachal-pradesh-fiscal-data-explorer-introductory-blog-5a3d344803ab"
          target="_blank"
          class={`case-studies-card card-link-container ${props.data.class}`}
        >
          <div class="right-aligned card-container">
            <div class="image-container first"></div>
            <div class="text-container">
              <h4>Himachal Pradesh Fiscal Data Explorer - Introductory Blog</h4>
              <p>
                Fiscal Data Explorer is a unique tool where citizens can explore
                both budgets and spending data of Himachal Pradesh in an easy to
                comprehend and simple to use manner.
              </p>
            </div>
          </div>
        </a>
  );
};

export default NewsCard;
