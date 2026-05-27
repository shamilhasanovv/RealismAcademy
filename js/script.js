const cardWrapper = document.getElementById('card-wrapper');

const courses = [
  {
    title: "Yağlı boya texnikaları — Başlanğıc",
    category: "Yağlı boya",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80",
    rating: "★★★★★",
    reviews: 152,
    price: 120
  },
  {
    title: "Realist portret rəsmi master kurs",
    category: "Portret",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
    rating: "★★★★★",
    reviews: 218,
    price: 180
  },
  {
    title: "Akvarel ilə mənzərə rəsmi",
    category: "Akvarel",
    img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80",
    rating: "★★★★☆",
    reviews: 96,
    price: 95
  },
  {
    title: "Akademik karandaş eskizi",
    category: "Eskiz",
    img: "https://images.unsplash.com/photo-1607457661749-7d1a4310f9f6?w=600&q=80",
    rating: "★★★★★",
    reviews: 174,
    price: 80
  },
  {
    title: "Naturmort və işıq-kölgə",
    category: "Naturmort",
    img: "https://images.unsplash.com/photo-1579541591970-e5780dc6b31f?w=600&q=80",
    rating: "★★★★★",
    reviews: 64,
    price: 110
  },
  {
    title: "Anatomik insan figuru rəsmi",
    category: "Anatomik",
    img: "https://images.unsplash.com/photo-1582561424557-058531d3b2cb?w=600&q=80",
    rating: "★★★★☆",
    reviews: 88,
    price: 140
  }
];

const courseHTML = courses.map(item => `
  <article class="card">
    <div class="card-image">
      <span class="card-tag">${item.category}</span>
      <img src="${item.img}" alt="${item.title}">
    </div>
    <div class="card-content">
      <div class="card-rating">
        <span class="stars">${item.rating}</span>
        <span class="reviews-count">(${item.reviews} rəy)</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <div class="card-footer">
        <span class="card-price">${item.price} ₼</span>
        <a href="#" class="card-link">
          Ətraflı <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </article>
`).join('');

if (cardWrapper) cardWrapper.innerHTML = courseHTML;


const instructors = [
  {
    name: "Aysel Məmmədova",
    role: "13+ illik yağlı boya təcrübəsi",
    img: "https://i.pravatar.cc/400?img=47",
    bio: "Yağlı boya texnikası və realizm üslubunda ixtisaslaşmış rəssam, dünya qalereyalarında sərgilənən əsərlərin müəllifi."
  },
  {
    name: "Elnur Hüseynov",
    role: "Realizm üslubu müəllimi",
    img: "https://i.pravatar.cc/400?img=12",
    bio: "Akademik rəsm və realist portret üzrə mentor; 15 ildən artıqdır canlı və onlayn dərslər keçir."
  },
  {
    name: "Səbinə Quliyeva",
    role: "Akvarel sənətçisi",
    img: "https://i.pravatar.cc/400?img=45",
    bio: "Akvarel ilə mənzərə və botanik illüstrasiya üzrə beynəlxalq mükafatçı, kitab müəllifi."
  },
  {
    name: "Rüfət Əliyev",
    role: "Akademik rəsm müəllimi",
    img: "https://i.pravatar.cc/400?img=33",
    bio: "Karandaş eskizi, anatomik rəsm və kompozisiya üzrə peşəkar; minlərlə tələbənin portfolioda iz qoyub."
  }
];

const instructorWrap = document.getElementById('instructor-wrapper');
if (instructorWrap) {
  instructorWrap.innerHTML = instructors.map(inst => `
    <article class="instructor-card">
      <div class="instructor-image">
        <img src="${inst.img}" alt="${inst.name}">
      </div>
      <div class="instructor-meta">
        <h3>${inst.name}</h3>
        <span class="instructor-role">${inst.role}</span>
        <p class="instructor-bio">${inst.bio}</p>
        <div class="instructor-social">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Pinterest"><i class="fa-brands fa-pinterest"></i></a>
        </div>
      </div>
    </article>
  `).join('');
}


const reviews = [
  {
    name: "Aytən Hüseynli",
    role: "Yağlı boya tələbəsi",
    img: "https://i.pravatar.cc/200?img=49",
    text: "Yağlı boya kursunu 6 ay əvvəl bitirdim və artıq ilk sərgimə hazırlaşıram. Müəllimin fərdi yanaşması və geri bildirimi rəsmlərimi tamamilə dəyişdirdi.",
    color: "rose",
    rating: 5
  },
  {
    name: "Murad Qasımov",
    role: "Akvarel həvəskarı",
    img: "https://i.pravatar.cc/200?img=15",
    text: "Heç vaxt rəsm çəkməmişdim. Akvarel mənzərə kursu sayəsində 3 ay ərzində ilk işlərimi instagram səhifəmdə paylaşmağa başladım — geri bildirim əla idi.",
    color: "purple",
    rating: 5
  },
  {
    name: "Lalə Cəfərova",
    role: "Portret rəssamı",
    img: "https://i.pravatar.cc/200?img=44",
    text: "Realist portret master kursu klassik akademik dərslərdən qat-qat daha praktik və anlaşıqlı idi. Müəllimimin sayəsində sifariş üzərində işləməyə başlamışam.",
    color: "yellow",
    rating: 5
  },
  {
    name: "Kənan Babayev",
    role: "Akademik rəsm tələbəsi",
    img: "https://i.pravatar.cc/200?img=68",
    text: "Anatomik rəsm və karandaş eskizi modullarını paralel keçdim. Hər həftəlik məşqlər və müəllimin canlı korreksiyası bacarıqlarımı bir səviyyə üstə qaldırdı.",
    color: "blue",
    rating: 5
  }
];

const reviewsTrack = document.getElementById('reviews-track');
if (reviewsTrack) {
  const buildCard = (r) => `
    <article class="review-card review-${r.color}" aria-hidden="false">
      <div class="review-head">
        <img src="${r.img}" alt="${r.name}" class="review-avatar">
        <div>
          <h4 class="review-name">${r.name}</h4>
          <span class="review-role">${r.role}</span>
        </div>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-stars">
        ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
      </div>
    </article>
  `;
  const oneSet = reviews.map(buildCard).join('');
  reviewsTrack.innerHTML = oneSet + oneSet;

  const prevBtn = document.querySelector('.review-nav.prev');
  const nextBtn = document.querySelector('.review-nav.next');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    reviewsTrack.classList.add('reverse');
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    reviewsTrack.classList.remove('reverse');
  });
}


const blogPosts = [
  {
    title: "Yağlı boya ilə başlamaq: yeni başlayanlar üçün 10 məsləhət",
    category: "Yağlı boya",
    date: "12 May 2026",
    author: "Aysel Məmmədova",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80"
  },
  {
    title: "Realist portret necə çəkilir? Addım-addım təlimat",
    category: "Portret",
    date: "28 Aprel 2026",
    author: "Elnur Hüseynov",
    img: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&q=80"
  },
  {
    title: "Akvarel ilə işləyərkən ən çox edilən 5 səhv",
    category: "Akvarel",
    date: "10 Aprel 2026",
    author: "Səbinə Quliyeva",
    img: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80"
  }
];

const blogWrap = document.getElementById('blog-wrapper');
if (blogWrap) {
  blogWrap.innerHTML = blogPosts.map(post => `
    <article class="blog-card">
      <a href="#" class="blog-image">
        <img src="${post.img}" alt="${post.title}">
        <span class="blog-tag">${post.category}</span>
      </a>
      <div class="blog-content">
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
          <span><i class="fa-regular fa-user"></i> ${post.author}</span>
        </div>
        <h3 class="blog-title"><a href="#">${post.title}</a></h3>
        <a href="#" class="blog-read-more">
          Oxumağa davam et <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `).join('');
}


const backToTop = document.getElementById('backToTop');
if (backToTop) {
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


const hamburger = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mainNav.classList.toggle('menu-open');
  });

  mainNav.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) {
        const targetId = href.slice(1);
        if (targetId === '' || targetId === 'top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.getElementById(targetId);
          if (target) {
            e.preventDefault();
            const headerOffset = window.matchMedia('(min-width: 720px)').matches ? 120 : 80;
            const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
        mainNav.querySelectorAll('.nav-menu a').forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
      mainNav.classList.remove('menu-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('menu-open') && !mainNav.contains(e.target)) {
      mainNav.classList.remove('menu-open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') mainNav.classList.remove('menu-open');
  });

  const desktopMq = window.matchMedia('(min-width: 720px)');
  const handleViewportChange = (ev) => {
    if (ev.matches) mainNav.classList.remove('menu-open');
  };
  if (desktopMq.addEventListener) {
    desktopMq.addEventListener('change', handleViewportChange);
  } else if (desktopMq.addListener) {
    desktopMq.addListener(handleViewportChange);
  }
}
