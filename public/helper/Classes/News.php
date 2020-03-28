<?php

class News
{
    private $newsFileLocation = "news/news.json";

    public function printNews(int $limit = 3)
    {
        $newsList = $this->getNews($limit);
        $source = $this->render($newsList);
        return $source;
    }

    public function getNews(int $limit = 3)
    {
        $config = new Config();
        $newsFileLocation = $config->get("path") . $this->newsFileLocation;
        $newsData = file_get_contents($newsFileLocation);
        $newsList = json_decode($newsData, true);
        return array_slice($newsList, 0, $limit);
    }

    private function render($newsList)
    {
        $out = "<ul id='news-list'>";
        foreach ($newsList as $key => $item) {
            $out .= "<li>\n";            
            $out .= "   <div class='news-header'>" . $item["header"] . "</div>\n";
            $out .= "   <div class='news-date'>\n";
            $out .= $item["date"];
            if ($item["url"]) {
                $out .= "   <span class='news-url'><a target='_blank' href='" . $item["url"] . "' rel='noopener'>Read more</a></span>";
            }
            $out .= "</div>";   
            $out .= "</li>\n";            
        }
        $out .= "</ul>\n\n";
        return $out;
    }
}
