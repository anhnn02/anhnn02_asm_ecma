import posts from "../data";

const News = {
    print() {
        return /* html */ ` 
            ${posts.map((post) => `
            <div class="py-5 px-6 border-[1px] border-[#d6d6d6]">
                <div class="">
                    <a href="">
                    <img class="max-w-full w-full"
                    src="${post.img}"
                    alt="">
                    </a>
                    <h3 class="my-2"><a class="text-[#a4532e] font-bold" href="">${post.title}</a></h3>
                    <p>${post.desc}</p>
                </div>
            </div>
            `).join("")}
        `;
    },
};
export default News;
