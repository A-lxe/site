import Head from 'next/head';
import Card from '../components/Card';
import { execSync } from 'child_process';

export async function getStaticProps(context) {
  const gitBranch = execSync('git branch --show-current').toString();
  return { props: { gitBranch } };
}

export default function Home({ gitBranch }) {
  return (
    <>
      <Head>
        <title>Alex Aubuchon</title>
      </Head>

      <Card>
        <h1>The Pitch</h1>
        <p>
          Hello! I'm Alexander Aubuchon (though I normally go by Alex, or really
          whatever gets my attention), a friendly type of person hailing from
          Massachusetts. I studied computer science plus some physics at
          Northeastern. I like games, rock climbing, and figuring stuff out.
          Right now I'm working on efficient systems at Stripe.
        </p>
        <p>
          Previously I've worked at a few labs, a shoe company, a search
          company, and a world-class physics experiment. You can check out my
          resume for a full list{' '}
          <a
            href="https://github.com/reasonablytall/resume/blob/master/resume.pdf"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <p>
          And the source for this site{' '}
          <a
            href={`https://github.com/reasonablytall/site/tree/${gitBranch}/`}
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Card>

      <footer></footer>
    </>
  );
}
