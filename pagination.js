export default {
  props: ["pages", "getProduct"],
  template: `
    
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"
      :class="{disabled: !pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous"
        @click="getProduct(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      
      <li class="page-item" 
      :class="{active: item === pages.current_page}"
        v-for="item in pages.total_pages" :key="item + 'page'">
        <a class="page-link" href="#"
        @click.prevent="$emit('change-page', item)">{{item}}</a>
      </li>

      

      <li class="page-item"
      :class="{disabled: !pages.has_next}">
        <a class="page-link" href="#" aria-label="Next"
        @click="getProduct(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
    `,
};
