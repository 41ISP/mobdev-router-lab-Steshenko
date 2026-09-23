import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  return (
    <section className="page-shell">
      <StatusBlock
        title="Страница не найдена"
        text="Похоже, такого адреса нет в MovieBox."
        buttonText="На главную"
        onClick={() => {
        }}
      />
    </section>
  );
}
