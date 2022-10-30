import { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { usePosts } from "./hooks/usePosts";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import PostPagination from "./components/PostPagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, postLoad, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ textAlign: "center" }}>Произошла ошибка - {postError}</h1>
      )}
      {postLoad ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          deletePost={deletePost}
          posts={sortedAndSearchPosts}
          title={"Список постов"}
        />
      )}
      <PostPagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default App;
