/* eslint-disable @next/next/no-page-custom-font */
import { useState, useEffect, useRef } from "react";
import yaml from "js-yaml";

import Head from "next/head";

import { Button } from "react-bootstrap";
import Drawer from "@bit/mui-org.material-ui.drawer";
import { Icon } from "@iconify/react";

import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../components/Header";
import Card from "../components/Card";
import FiltersGroup from "../components/FiltersGroup";
import Footer from "../components/Footer";
import InfoModal from "../components/InfoModal";

import styles from "../styles/Home.module.scss";

const env = process.env.NODE_ENV;

import { promises as fs } from "fs";
import path from "path";

export async function getStaticProps(context) {
  const dataDirectory = path.join(process.cwd(), "docs/data");

  const initialToolsData = await fs
    .readFile(path.join(dataDirectory, "tools.yml"))
    .then((data) => yaml.load(data))
    .catch((err) => {
      throw new Error(err);
    });

  const initialPlatformsData = await fs
    .readFile(path.join(dataDirectory, "platforms.yml"))
    .then((data) => yaml.load(data))
    .catch((err) => {
      throw new Error(err);
    });

  const initialCategoriesData = await fs
    .readFile(path.join(dataDirectory, "categories.yml"))
    .then((data) => yaml.load(data))
    .catch((err) => {
      throw new Error(err);
    });

  if (!initialPlatformsData || !initialToolsData || !initialCategoriesData) {
    return {
      notFound: true,
    };
  }

  const initialPlatformFilters = initialPlatformsData.map((platform) => {
    return {
      label: platform.nome,
      isChecked: true,
    };
  });

  const initialCategoryFilters = initialCategoriesData.map((category) => {
    return {
      slug: category.slug,
      label: category.nome,
      isChecked: category.nome === "Visualização" ? true : false,
    };
  });

  return {
    props: {
      initialToolsData,
      initialPlatformsData,
      initialPlatformFilters,
      initialCategoriesData,
      initialCategoryFilters,
    }, // will be passed to the page component as props
  };
}

export default function Home({
  initialToolsData,
  initialPlatformsData,
  initialPlatformFilters,
  initialCategoriesData,
  initialCategoryFilters,
}) {
  //Refs
  const cardNumberPerLoading = useRef(12);

  const isInitialCountMount = useRef(true);

  const [toolsData, setToolsData] = useState([...initialToolsData]);

  const [filteredToolsData, setFilteredToolsData] = useState([
    ...initialToolsData,
  ]);

  const [platforms, setPlatforms] = useState([...initialPlatformsData]);

  const [categories, setCategories] = useState([...initialCategoriesData]);

  const [searchInput, setSearchInput] = useState("");

  const [categoryFilters, setCategoryFilters] = useState([
    ...initialCategoryFilters,
  ]);

  const [platformFilters, setPlatformFilters] = useState([
    ...initialPlatformFilters,
  ]);

  const [onlyOpenSourceFilter, setOnlyOpenSourceFilter] = useState(false);

  const [showHowToModal, setShowHowToModal] = useState(false);
  const [showAboutPageModal, setShowAboutPageModal] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Infinite Scroll
  const [count, setCount] = useState({
    prev: 0,
    next: cardNumberPerLoading.current,
  });

  const [hasMore, setHasMore] = useState(true);

  const [current, setCurrent] = useState(
    initialToolsData.slice(count.prev, count.next)
  );

  // Ao inicializar o componente
  useEffect(() => {
    //Muda o número de cards carregados por vez se a tela for pequena
    if (window.innerWidth <= 576) {
      cardNumberPerLoading.current = 6;
    }

    const fetchUpdatedData = async () => {
      //Lista de ferramentas
      const updatedToolsData = await fetch("/toolkit_ddj/data/tools.yml")
        .then((res) => res.text())
        .then((data) => yaml.load(data));
      console.log(updatedToolsData);
      setToolsData([...updatedToolsData]);

      //Lista de plataformas
      const updatedPlatformsData = await fetch(
        "/toolkit_ddj/data/platforms.yml"
      )
        .then((res) => res.text())
        .then((data) => yaml.load(data));

      setPlatforms(updatedPlatformsData);

      //Lista de categorias
      const updatedCategoriesData = await fetch(
        "/toolkit_ddj/data/categories.yml"
      )
        .then((res) => res.text())
        .then((data) => yaml.load(data));

      setCategories(updatedCategoriesData);
    };

    if (env !== "development") {
      fetchUpdatedData();
    }

    const filteredDatabase = filterDatabase();
    setFilteredToolsData(filteredDatabase);
  }, []);

  //Atualiza os filtros de categorias
  useEffect(() => {
    setCategoryFilters(() => {
      return categories.map((category) => {
        return {
          slug: category.slug,
          label: category.nome,
          isChecked: category.nome === "Visualização" ? true : false,
        };
      });
    });
  }, [categories]);

  //Atualiza os filtros de plataformas
  useEffect(() => {
    setPlatformFilters(() => {
      return platforms.map((platform) => {
        return {
          label: platform.nome,
          isChecked: true,
        };
      });
    });
  }, [platforms]);

  // Filtra novamente base de dados original toda vez que um dos filtros muda
  useEffect(() => {
    const filteredDatabase = filterDatabase();
    setFilteredToolsData(filteredDatabase);
  }, [
    toolsData,
    categoryFilters,
    platformFilters,
    onlyOpenSourceFilter,
    searchInput,
  ]);

  useEffect(() => {
    setCount({ prev: 0, next: cardNumberPerLoading.current });
    setCurrent(filteredToolsData.slice(0, cardNumberPerLoading.current));
    setHasMore(true);
  }, [filteredToolsData]);

  // Checa se ainda tem mais ferramentas toda vez que o current muda
  useEffect(() => {
    if (current.length === filteredToolsData.length) {
      setHasMore(false);
    }
  }, [current, filteredToolsData]);

  //Muda o foco para o primeiro novo card após a mudança de count
  useEffect(() => {
    if (isInitialCountMount.current) {
      isInitialCountMount.current = false;
    } else {
      if (
        (count.next > 12 && window.innerWidth > 576) ||
        (count.next > 6 && window.innerWidth <= 576)
      ) {
        console.log(cardNumberPerLoading.current);
        document.getElementById("new-first-card").focus();
      }
    }
  }, [count]);

  const handleModalClose = () => {
    if (showHowToModal) {
      setShowHowToModal(false);
    } else {
      setShowAboutPageModal(false);
    }
  };

  const handleModalOpen = (modalName) => {
    if (modalName === "howTo") {
      setShowHowToModal(true);
    } else {
      setShowAboutPageModal(true);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const handleMoreDataButtonClick = () => {
    if (current.length === filteredToolsData.length) {
      setHasMore(false);
      return;
    }

    setCurrent(
      current.concat(
        filteredToolsData.slice(
          count.prev + cardNumberPerLoading.current,
          count.next + cardNumberPerLoading.current
        )
      )
    );

    setCount((prevState) => ({
      prev: prevState.prev + cardNumberPerLoading.current,
      next: prevState.next + cardNumberPerLoading.current,
    }));
  };

  //Aplica todos os filtros à base original de dados e retorna a base filtrada e ordenada
  const filterDatabase = () => {
    return toolsData
      .filter((item) => !item.desativado) //remove itens desativados
      .filter(categoryFilterRule)
      .filter(platformFilterRule)
      .filter(onlyOpenSourceFilterRule)
      .filter(searchFilterRule)
      .sort(sortRule);
  };

  /*--- Filter Rules ---*/

  //Remove itens inativos
  const removeInactiveRule = (item) => {
    return !item.desativado;
  };

  // Retorna o item se a categoria dele for encontrada dentre os filtros de categoria marcados
  const categoryFilterRule = (item) => {
    const categoryCheckedFilters = categoryFilters
      .filter((filterItem) => filterItem.isChecked)
      .map((filterItem) => filterItem.label);

    if (categoryCheckedFilters.length === 0) {
      return false;
    } else {
      return categoryCheckedFilters.indexOf(item.categoria) !== -1;
    }
  };

  // Retorna o item se a quantidade de suas plataformas que for igual às plataformas marcadas for maior que zero
  const platformFilterRule = (item) => {
    // Copia a array de plataformas do item para uma nova variável
    const itemPlatforms = [...item.plataforma];

    const platformCheckedFilters = platformFilters
      .filter((filterItem) => filterItem.isChecked)
      .map((filterItem) => filterItem.label);

    if (platformCheckedFilters.length === 0) {
      return false;
    } else {
      // 'match' guarda todas as plataformas do item que estão inclusas na array de plataformas marcadas
      const match = itemPlatforms.filter((platform) => {
        return platformCheckedFilters.includes(platform);
      });

      // se o nº de plataformas do item inclusas nas plataformas marcadas for maior que 0, retorna o item
      return match.length > 0;
    }
  };

  const onlyOpenSourceFilterRule = (item) =>
    onlyOpenSourceFilter ? item["open-source"] : true;

  const searchFilterRule = (item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  };

  const sortRule = (a, b) => {
    return b.destaque - a.destaque || a.categoria < b.categoria;
  };

  /*--- Filter Handlers ---*/
  const onSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const onCategoryFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    setCategoryFilters((currentFilters) =>
      currentFilters.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }
        return f;
      })
    );
  };

  const clearCategoryFilters = () => {
    setCategoryFilters((currentFilters) =>
      currentFilters.map((f) => {
        return {
          ...f,
          isChecked: true,
        };
      })
    );
  };

  const onPlatformFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    setPlatformFilters((currentFilters) =>
      currentFilters.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }
        return f;
      })
    );
  };

  const clearPlatformFilters = () => {
    setPlatformFilters((currentFilters) =>
      currentFilters.map((f) => {
        return {
          ...f,
          isChecked: true,
        };
      })
    );
  };

  const onOnlyOpenSourceFilter = (event) => {
    const {
      target: { checked },
    } = event;

    setOnlyOpenSourceFilter(checked);
  };

  return (
    <div>
      <Head>
        <title>Caixa de Ferramentas | Jornalismo de Dados</title>
        <meta
          name="description"
          content={`Explore mais de ${
            toolsData.filter(removeInactiveRule).length
          } ferramentas para jornalistas de dados e colabore para aumentar a base.`}
        />

        {/* Icons */}
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header
        toolsNumber={
          toolsData.length > 0
            ? toolsData.filter(removeInactiveRule).length
            : 144
        }
        handleModalOpen={handleModalOpen}
      />

      <InfoModal
        showModal={showHowToModal}
        onHide={handleModalClose}
        type="howTo"
      />
      <InfoModal
        showModal={showAboutPageModal}
        onHide={handleModalClose}
        type="aboutPage"
      />

      <main>
        <div className={styles.fabButtonsContainer}>
          {/* Abrir painel com os filtros */}
          <Button
            aria-label="Voltar ao início da página"
            className={`${styles.backToTopButton} ${styles.fabButton}`}
            onClick={() => {
              document.getElementById("github-corner").focus();
              window.scrollTo(0, 0);
            }}
          >
            <Icon icon="mdi:chevron-up" color="#fff" />
          </Button>

          {/* Voltar ao topo da página */}
          <Button
            aria-label="Abrir janela de filtros"
            className={`${styles.openDrawerFiltersButton} ${styles.fabButton}`}
            onClick={toggleDrawer(true)}
          >
            <Icon icon="mdi:filter" color="#fff" />
          </Button>
        </div>

        <div className={styles.contentContainer}>
          {/* Filtros */}
          <FiltersGroup
            filtersData={{
              onSearch,
              categoryFilters,
              onCategoryFilter,
              clearCategoryFilters,
              platformFilters,
              platforms,
              onPlatformFilter,
              clearPlatformFilters,
              onOnlyOpenSourceFilter,
              onlyOpenSourceFilter,
            }}
          />

          {filteredToolsData.length > 0 ? (
            <div className={styles.resultsContainer}>
              <div className={styles.resultsInfo}>
                <span className={styles.resultsNumber}>
                  {filteredToolsData.length}
                </span>{" "}
                {filteredToolsData.length === 1 ? "Resultado" : "Resultados"}
              </div>
              {filteredToolsData.filter((item) => item.destaque).length > 0 && (
                <div className={styles.highlightsTitleContainer}>
                  <Icon icon="mdi:star" color={styles.yellow} />
                  <span className={styles.highlightsTitle}>Destaques</span>
                </div>
              )}
              <InfiniteScroll
                className={styles.cardsContainer}
                dataLength={current.length}
                hasMore={hasMore}
                endMessage={
                  <div
                    className={styles.allResultsLoadedMessage}
                    style={{ textAlign: "center" }}
                  >
                    <strong>Todos os resultados foram carregados!</strong>
                  </div>
                }
              >
                {current &&
                  current.map((tool, index) => {
                    const currentHighlightsNumber = current.filter(
                      (item) => item.destaque
                    ).length;
                    if (
                      tool.destaque &&
                      index === currentHighlightsNumber - 1
                    ) {
                      return (
                        <>
                          <Card
                            key={index}
                            toolData={tool}
                            categories={categories}
                            platforms={platforms}
                          />
                          <div
                            tabIndex="0"
                            className={styles.highlightsSeparator}
                          >
                            <span
                              style={{
                                height: "0",
                                width: "0",
                                opacity: "0",
                                position: "absolute",
                                left: "-9999px",
                              }}
                            >
                              Fim dos destaques
                            </span>
                          </div>
                        </>
                      );
                    } else if (
                      index ===
                      current.length - cardNumberPerLoading.current
                    ) {
                      return (
                        <Card
                          id="new-first-card"
                          key={index}
                          toolData={tool}
                          categories={categories}
                          platforms={platforms}
                        />
                      );
                    } else {
                      return (
                        <Card
                          key={index}
                          toolData={tool}
                          categories={categories}
                          platforms={platforms}
                        />
                      );
                    }
                  })}
              </InfiniteScroll>
              {hasMore && (
                <div className={styles.loadMoreButtonContainer}>
                  <Button
                    variant="load-more"
                    aria-label="Carregar mais ferramentas"
                    className={styles.loadMoreButton}
                    onClick={handleMoreDataButtonClick}
                  >
                    <Icon icon="mdi:plus" color={styles.red} />
                    Carregar mais
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div
              className={styles.allResultsLoadedMessage}
              style={{ textAlign: "center" }}
            >
              <strong>
                Não foi encontrado nenhum resultado para esta filtragem
              </strong>
            </div>
          )}
        </div>

        <Drawer
          PaperProps={{ id: "filter-drawer", tabindex: "0" }}
          classes={{ paper: styles.drawerInner }}
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Button
            autoFocus
            id="close-drawer-button"
            variant="light"
            aria-label="Fechar janela de filtros"
            className={styles.closeDrawerButton}
            onClick={toggleDrawer(false)}
          >
            <Icon icon="mdi:close" color="#000" />
          </Button>
          <FiltersGroup
            isSideDrawer={true}
            filtersData={{
              onSearch,
              categoryFilters,
              onCategoryFilter,
              clearCategoryFilters,
              platformFilters,
              platforms,
              onPlatformFilter,
              clearPlatformFilters,
              onOnlyOpenSourceFilter,
              onlyOpenSourceFilter,
            }}
          />
          <Button
            className={styles.applyFiltersButton}
            onClick={toggleDrawer(false)}
          >
            Aplicar filtros
          </Button>
        </Drawer>
      </main>

      <Footer handleModalOpen={handleModalOpen} />
    </div>
  );
}
