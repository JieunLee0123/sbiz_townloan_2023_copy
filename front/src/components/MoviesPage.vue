<template>
  <section id="moviesPage">
    <div class="container">
      <h1 class="section_title mb-10">로컬크리에이터</h1>

      <select v-model="selectedValue" id="countries" class="my-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>지역을 선택하세요.</option>
        <option value="LC01 6">서울</option>
        <option value="LC02 4">부산</option>
        <option value="LC03 4">대구</option>
        <option value="LC04 4">인천</option>
        <option value="LC05 4">광주</option>
        <option value="LC06 3">대전</option>
        <option value="LC07 3">울산</option>
        <option value="LC08 4">경기</option>
        <option value="LC09 9">강원</option>
        <option value="LC10 4">충남</option>
        <option value="LC11 4">충북</option>
        <option value="LC12 3">경남</option>
        <option value="LC13 4">경북</option>
        <option value="LC14 4">전남</option>
        <option value="LC15 4">전북</option>
        <option value="LC16 9">제주</option>
        <option value="LC17 3">세종</option>
      </select>

      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="w-[10%] px-6 py-3">
                          타이틀 
                      </th>
                      <th scope="col" class="w-[10%] px-6 py-3">
                          선정년도 
                      </th>
                      <th scope="col" class="w-[15%] px-6 py-3">
                          소재지 
                      </th>
                      <th scope="col" class="w-[15%] px-6 py-3">
                          7대분야 
                      </th>
                      <th scope="col" class="w-[50%] px-6 py-3">
                          컨텐츠  
                      </th>
                  </tr>
              </thead>

              <tbody v-if="datas">
                  <tr v-for="data in datas" :key="data.title" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ data.title }}
                      </th>
                      <td class="px-6 py-4">
                          {{ data.selectYear }}
                      </td>
                      <td class="px-6 py-4">
                          {{ data.location }}
                      </td>
                      <td class="px-6 py-4">
                          {{ data.field }}
                      </td>
                      <td class="px-6 py-4">
                          {{ data.content }}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    const [reginCd, pageCnt] = ['LC01', 6]

    const data = {
      reginCd: reginCd,
      pageCnt: pageCnt
    }

    this.$http.post('/api/movies', data)
      .then(res => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data, 'text/html');

        const lists = doc.querySelectorAll('.local_list > li')
        lists.forEach(li => {
          const [titleTag, selectYearTag, locationTag, fieldTag, contentTag] = [
            li.querySelector('.tit'),
            li.querySelector('.list_ul > li:nth-child(1)'),
            li.querySelector('.list_ul > li:nth-child(2)'),
            li.querySelector('.list_ul > li:nth-child(3)'),
            li.querySelector('.cont')
          ]

          const [ title, selectYear, location, field, content ] = [
            (titleTag ? titleTag.innerText : '-'),
            (selectYearTag ? selectYearTag.innerText.replace('선정년도', '') : '-'),
            (locationTag ? locationTag.innerText.replace('소재지', '') : '-'),
            (fieldTag ? fieldTag.innerText.replace('7대분야', '') : '-'),
            (contentTag ? contentTag.innerText.replace('▶ ', '') : '-')
          ]

          const obj = {
            title: title,
            selectYear: selectYear,
            location: location,
            field: field,
            content: content
          }

          this.datas.push(obj)
        })
     })
  },
  data() {
    return {
      datas: [],
      selectedValue: ''
    }
  },
}
</script>

