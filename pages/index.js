import Map from '../components/Map';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const { query: { type } } = router;
  return (
    <Map type={type} />
  )
}
