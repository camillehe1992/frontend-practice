<template>
  <div id="app">
    <reactive-base :app="index" :url="url" :enable-appbase="true">
      <div class="filters-container">
        <data-search
          componentId="SearchBox"
          placeholder="Search for books or authors"
          class="filter"
          :dataField="[
            {
              field: 'authors',
              weight: 3,
            },
            {
              field: 'authors.autosuggest',
              weight: 1,
            },
            {
              field: 'original_title',
              weight: 5,
            },
            {
              field: 'original_title.autosuggest',
              weight: 1,
            },
          ]"
        />
        <multi-list
          componentId="Authors"
          dataField="authors.keyword"
          class="filter"
          title="Select Authors"
          selectAllLabel="All Authors"
        />
        <single-range
          componentId="Ratings"
          dataField="average_rating"
          :data="[
            { start: 0, end: 3, label: 'Rating < 3' },
            { start: 3, end: 4, label: 'Rating 3 to 4' },
            { start: 4, end: 5, label: 'Rating > 4' },
          ]"
          title="Book Ratings"
          class="filter"
        />
        <toggle-button
          componentId="MeetupTops"
          dataField="language_code.keyword"
          :data="languages"
          :defaultValue="['eng']"
          :multiSelect="false"
          :showFilter="true"
          title="Select Languages"
          class="filter"
        />
      </div>

      <reactive-list
        componentId="SearchResult"
        dataField="original_title.keyword"
        className="result-list-container"
        :pagination="true"
        :from="0"
        :size="5"
        :react="{ and: ['SearchBox', 'Ratings', 'Authors', 'MeetupTops'] }"
      >
        <div slot="renderItem" slot-scope="{ item }">
          <v-card class="mx-auto my-3">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <div class="d-flex">
              <div class="pa-2">
                <v-img
                  :src="item.image"
                  alt="Book Cover"
                  class="book-image"
                ></v-img>
              </div>
              <div class="pa-auto">
                <v-card-title>{{ item.original_title }}</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="item.average_rating"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="grey--text ms-4">
                      {{ item.average_rating }} ({{ item.ratings_count }})
                    </div>
                  </v-row>
                  <div class="my-2 text-subtitle-2">& • {{ item.authors }}</div>
                  <div class="my-2 text-subtitle-2">
                    $ • {{ item.language_code }}
                  </div>
                  <div class="my-2 text-subtitle-2">
                    Published {{ item.original_publication_year }}
                  </div>
                </v-card-text>
              </div>
            </div>
          </v-card>
        </div>
      </reactive-list>
    </reactive-base>
  </div>
</template>

<script>
// access opensearch via proxy https://github.com/appbaseio-apps/reactivesearch-proxy-server/blob/vue/index.js
export default {
  name: "BaseSearch",
  data() {
    return {
      index: "good-books-ds",
      url: "https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io",
      languages: [
        { label: "English", value: "eng" },
        { label: "English-US", value: "en-US" },
        { label: "English-CA", value: "en-CA" },
      ],
    };
  },
};
</script>

<style>
.book-image {
  height: 150px;
  width: 110px;
  background-size: cover;
}
</style>
