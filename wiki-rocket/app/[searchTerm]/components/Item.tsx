import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div>
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article>
      <div>
        <div>
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article>{itemTextCol}</article>
  );

  return content;
}
