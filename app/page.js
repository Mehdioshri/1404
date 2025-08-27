
import Link from 'next/link';
import { categories } from '@/data/categories';


export default function HomePage() {
  return (
    <div className="container">
      <h1 className="mb-4">دسته‌بندی‌ها همه محصولات</h1>
      <div className="list-group">



        {categories.map((cat) => (

 <div key={cat.name} className="card h-100">
  <img src={cat.image}  className="card-img-top"/>
          <Link key={cat.slug} href={`/category/${cat.slug}`} className="list-group-item list-group-item-action">
            {cat.name}
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
