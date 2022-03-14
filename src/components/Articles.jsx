import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fecthAllArticles, fetchAllTopics } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Loader } from "./Loader";
import { TopArticles } from "./TopArticles";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fecthAllArticles(topic, null).then((data) => {
      setArticles(data);
    });
    setLoading(false);
  }, [topic]);

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data);
    });
  }, [topic, articles]);

  const handleSort = (e) => {
    let sort = e.target.value;
    setLoading(true);
    fecthAllArticles(null, sort).then((data) => {
      setArticles(data);
    });
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <>
      <TopArticles />
      <div className="main-container">
        {/* <div className="topics-container">
          <ul>
            {topics.map((topic, i) => {
              return (
                <Link key={i} to={`/articles/topic/${topic.slug}`}>
                  <li>-{topic.slug}-</li>
                </Link>
              );
            })}{" "}
          </ul>
        </div> */}

        <main className="all-articles-container">
          <div className="sorting">
            <div className="sorter">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADcklEQVRoge2YTWgcZRjHf8/uuNmlMdqYgydFqILd2RioJw+6H22TNOAH2kARbwE92Ite9FI8+nH04EGQiuBHcrBYsFCb3W0VFLEQmh2FUrDaCkoh2jSS/Uj272ETUdnZbnZ2zDbs7zIzzPyf5//wvu/zvgz06dOnz62EBRFP7tFAOUHOYFeQOII/46vMn7pklU5jOEEMlBOcQEwoSJDNWHE+B6Y61UcCZRcHAun/zXgQcbBCIBpQ37VYQQvpGQKtkTb4FfgSAGMvIhlWojBHZE5VUoWSTRdKNg3MhpgrpEKMNwslm05fZCmU+E0IpRCDK7mk9p51KYQRvxkO/L2xndhop4E7kcQRGW8B3dhi2sIBKCfIISa6GPeRjetqF2O2JAIQ9IjRC+yYfWTHFHKzDfErIrwWqbJQuY36QJ2xunEMSIdhJuNqK81hXeJ0osJTpy5ZpdWIfDsicoULNr8eZ313jMq8Z4URMQ5812ayaDalw9mUDoewq0fNmKwkyEKLqSXjnTnPqmlXaVvjt5UKV9NJ3T3nWVXwcZvJYhKzErPAdDfcN2EQWkwtEy9mXD0L3AfEgIjTuGIwEJKpjmm1Rvb9474uMXPGs58n92ioDM+HbWyrtNO16iZeKHr2/sYJ4BPgnlBdiXkzHpPD7pi4y0QOONtKcrNCahjP5T179+CodpXjfNblE0AzvlmOM5lftHORCncoipP3LK8VJgwW/UStCimbeLqwaB+OJzVcq3MGONh93/9BfHD+vNXSKT2pKD/W6lx59EHdX7xsZeC0n8y/a8Erec9OAgzBSs04VDOGa8ZwqKNivJFxtWTiIxp/eZYEKxueHvKT+S928cfm7ZxnVaC6+Zx1dSPEY+1gIz1frxlT+xe5XhxjKOPqPWC/n8i//RrHM66ON3v3f5zNIzDowL68yy/nFuyH9KiOWZ0U8LDP9z3HdeB3wQMmvojC9zlXB4oX7KqMV/1EPVeIjGcKJRs2OEJjOt9YF9cAInWW/XQ9V4jBUZDlS/Zp+XbuHBEjRc8WQCbjJT9d2L+Dto54PONyUtLrrFK6VsPJJjUq42XgkJ+s9wppMGXGFGtArL3m0nNTq1N2TCFOOqkxiZntNtIpEjOZpC5axtVl4N7tNhSQn3bG1BJyEE9gHAWGtttPhywDb2+3iT59+vTpc2vzF9SeIVny1t9OAAAAAElFTkSuQmCC" />
              <button value="votes" onClick={handleSort}>
                Popular
              </button>
            </div>
            <div className="sorter">
              <img src="data:image/png;base64,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" />
              <button value="created_at" onClick={handleSort}>
                New
              </button>
            </div>

            <div className="sorter">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD1UlEQVRoge2ZX4hUVRzHP787s+tm7S5rPUQhJVihOzNCA5p/GGc2IXcrBHWDjPC1t95SEsIeggxKH+21Rx+iqNwN290xtP8G2+xURkS+BJEoyohO69xfD861mWX+3Ht/Z9eg/TydOfd8f+f3nXvO4Z5zYJlllvlfIK4DjmT0ca2xS6EgwkPAffWOLih8nJzn2Knz8ofrfp0Zya3TR5IJ3lF4pkvTy+oxVvxBvnLVNzgy8mRaN/vKR8C9ISV/KbwBnC3OyXcucjAbyaV0dQJmgaGYIU5ohf3F3+WGJQ/PIgZIwHHimwB4Tu7hmDUP0xsprNdhPErWOICvwnCxJD/HDWB7Ix77cDPPPPHZZ0vFxhaj/l+E7Ra5zYjwqEnfjCmWzYiyyqRvxrJgmIfWvFHfSNUithr5zai/jcAFi95kRIUZi74pFrZY1jnyoUnfgKd8YNJbxAIHLfpGfI9XLHrr8ps26ZvJWMTWoVUy6RtDKWWL3jq03rXoF8Q6btTbyA/rThE+IfqfosCEwCTC7HRJPrfk4WRjVUjp18DGCJJLnrJ3qizOlm/zfqTO2xHaqmsT4HDPXkjrBMrOEE1PzszJ08GPkQ36oNbYJEIiZFeVK718du6cNH0eJaMk24lenxfmhTMK6zq1E5gMynUTZWBQNXxfA1W+GF2roxO/ytWgztXQ4tOyXPpb2NqtncKft8s1NgGDYftQ+LJe3HK9j8nRtToQPHNmBOBMSS53ayOCNpTDDicAPOGoyq2vCYHNN/qY3pbWIXBsZCkoluRIYAbI9iintqV1yKmRXEbXuIzXjmJJjgi8Xv+Z7VXec2Ykn9EnEj6xT0HCoEp/UJ6ek8OBGYVRJ6tWfljvF5+jQK+LeB14q5DSMcAHgsl2FRiIbeTZrK68VuUpFcZR9rD4JuDWkeyeVg8iGdmR1cGbVfYCuypVdgB3EWH9X0xCGclldE3S59ValecF7l7spOLQ0cj4uCYu/sQBfA4prFyqpOLQ1kjdxAlg91Ilo8qbnsf3IdqJwksChaCurZGLP/IasnQmABLw/lRJvu3W7jDqnU6TRbsYyaV0NXDAYY6h8IVvCqnuq8dpYOEi09JIAl4EVthTi8ws8MuCOg/YTv0ush2th5Yy4v6atDvJecZaXZTmU/qy0PkyqLURYb2j3CJxs4eJQkrPL6j2gHw3bbvJ7vKUPQoZYp5vtTQyMyd9pnRi4ikbp8qtV62tj2n/ih7OKq0PBZ1tdV1Qg90jaX241TNV+hUeaKf9TxkR4WCUvXsjd3SHqHDNUajKHTXSd50p4CRQM4SpAIf+Ad17DEtROxUJAAAAAElFTkSuQmCC"></img>

              <button onClick={handleSort} value="author">
                Author A-Z
              </button>
            </div>

            <div className="sorter">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEIElEQVRoge2ZX4hUZRjGf+9ZXVcTFyksLLqQiNozswVLwYJtZ2aX2CQloyJSL0JtTLFio6IgDLsopChIRfI2qIvNggQhdufMingRBOrMrJRaVIQ3UZRrzLbNvF2M5MyZ2Tnn+86US8zvbt7vfM/3PJz3/JnvQIcOHVohthNTCX0ReBTl1OIuxr44I5dttdYP6LJLs7wjMKjwaa7AXhA10Vhks3DK1Q3APgCEe+fKzAAv2GgBXC4xJsKOqhx3eUlO5/J8ZqLhWK79bN0vYavn6nJLLVRI1svRb6phHGQooXcipAPlXhw2mWrVUNfioua+zCcoO4MLX3GyG9T6mouLURDP1eUibGk6qLjD/axtiysLjII4wmagd75xrbAztiNLjIIoPBMozQTGH/FcvSm2KwsiB0kndYjGu8lWoPb50S0O29thzJTIQVQb2ubC/QXGgY8D9R0DA7o4tjNDIgW50i4b64rCuakk26g/I6CsXjHL+nYZjEqkJ7s4bEfprisqo8Bo0wnVs3ckrjkTQs+I5+kilKeNVIXhVJ+61q4sCA0iP7MBuMVC2Sx8TMJbS0hT/x56ESg2OXI10PfPL52n7f4lQoOo8l3de4ey2y/KJ8HjRly9tSx8DfQA4PBtu0xGIbS1lpbYj7APOKHwfLMQABNF+UHhMeC4CONl0+sqJqFn5Nh5mQVejiKWK8hR4GhcUzbY/h9ZcHSCLDQ6QRYaoXetB2/TFaUeDgMeEOWtVoFpR8lMFmU6rsGohAaZ7eEl4HFD3bVlOAQMWbmyILS1VFhlIyzCzTbzbAm/RiocAH6x0D5kMcea0Nbyi3J6ZEDXlP/kbm1yjYjyGoEWEvgwW+DtNvoMJdIfq4mv5DdgKlj3kpqh8TqYWlJim+nebVys9n4BvIQ+JMqBQHl6TtjoV9/P/lOsggy7ek+luunQVVO+KGXWnTgrv7bHmhnGD8SRpK6pCJ8D19WU/xDl4exZ+b591swwCjJ8h15frnAMuLGmXEZ4MluUL9trzYzIm86Dg7p0ySUmBQYDChk/Lx+YLOr1a8KpMFqRams6yial7tPChAoTACilChw5XpAfW2lGCvI66uQSjEtwbwve9AvyqkEGHujXVXMVvqHFHnITk+eyBbk95Jhw0gl9T+G5QPknFd4QaLzNChf8MzLZTCvVpy4OhSjr1jCjN7Ayl5O/5jsgNIjn6hMifGS4MCh7/aLsaTaUSuhBGjfEW2nt8otysNUh4ftawrrIC9ZNZPN8Q36BXQiHI+koY2EhIMpdSzgVacFGA/kWournyYSGqYZ4N8pyoQ/E37t5v7fEMhXuI+LtWuF8dxdN2+oqon5eMykXRZpsHRmEgBjf2duHSirBfrj62UKEV7J5eesamrJFxUvoHi+hJ9NJfepau+nQ4f/I32INJGHA5DeKAAAAAElFTkSuQmCC"></img>
              <button onClick={handleSort} value="title">
                Title A-Z
              </button>
            </div>
          </div>

          <div className="all-articles">
            <ul>
              {articles.map((article, i) => {
                return (
                  <li key={i}>
                    <Link to={`/articles/${article.article_id}`}>
                      <ArticleCard key={i} article={article} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};
