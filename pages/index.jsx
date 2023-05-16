import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect, useRef, Fragment } from "react";
import { getAllIssuesList } from "../services";
import IssueCard from "../modules/components/IssueCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [issues, setIssues] = useState([]);
  const hasMore = useRef(true);
  const paginationConfig = useRef({
    pageNo: 1,
    pageSize: 10,
  });

  const totalOpenedIssues = issues.filter(
    (item) => item.state === "open"
  ).length;


  const fetchIssuesList = async () => {
    try {
      const data = await getAllIssuesList(
        paginationConfig?.current?.pageNo,
        paginationConfig?.current?.pageSize
      );
      if (data.length == 0) hasMore.current = false;
      setIssues([...issues, ...data]);
      paginationConfig.current.pageNo += 1;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => await fetchIssuesList())();
  }, []);

  return (
    <Parent>
      <Head>
        <title>OfBusiness Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IssuesContainer>
        <h2>Issues </h2>
        <IssueCard title={`${totalOpenedIssues} Open`} isHeader />
        <div id="scrollableDiv">
          <InfiniteScroll
            hasMore={hasMore.current}
            loader={<span>Loading...</span>}
            scrollableTarget="scrollableDiv"
            next={fetchIssuesList}
            dataLength={issues.length}
            height={700}
          >
            {issues &&
              issues.map((item) => (
                <Fragment key={item.id}>
                  <IssueCard {...item} openedBy={item?.user?.login} />
                </Fragment>
              ))}
          </InfiniteScroll>
        </div>
      </IssuesContainer>
    </Parent>
  );
}

const Parent = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;
`;
const IssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;