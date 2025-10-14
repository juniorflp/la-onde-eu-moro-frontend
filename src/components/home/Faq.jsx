"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../global/Button";
import ContainerDefault from "../global/ContainerDefault";
import Accordion from "../ui/Accordion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "O que é o Lá Onde Eu Moro?",
      answer:
        "Você pode cadastrar seu imóvel acessando a página de cadastro através do botão no cabeçalho do site ou na seção de planos. Preencha os dados solicitados e siga as instruções na tela.",
    },
    {
      question: "Como faço para avaliar um condomínio?",
      answer:
        "Nossa plataforma oferece uma maneira fácil de encontrar imóveis, comparar avaliações de localidades, verificar comodidades próximas e entrar em contato diretamente com proprietários ou corretores.",
    },
    {
      question: "Como pesquisar por um condomínio?",
      answer:
        "Sim, oferecemos um período de teste de 7 dias para que você possa experimentar todas as funcionalidades premium da plataforma antes de decidir pelo plano que melhor atende suas necessidades.",
    },
    {
      question: "Como faço para acessar minha conta?",
      answer:
        "As avaliações são baseadas em dados reais coletados de usuários que moram ou já moraram na região, além de informações de segurança pública, mobilidade urbana e proximidade de serviços essenciais.",
    },
    {
      question: "Posso realizar uma avaliação sem conta?",
      answer:
        "Sim, você pode realizar uma avaliação sem conta. No entanto, recomendamos que você crie uma conta para ter acesso a recursos adicionais e para salvar suas avaliações.",
    },
    {
      question: "Posso realizar uma avaliação sem conta?",
      answer:
        "Sim, você pode realizar uma avaliação sem conta. No entanto, recomendamos que você crie uma conta para ter acesso a recursos adicionais e para salvar suas avaliações.",
    },
    {
      question: "Posso realizar uma avaliação sem conta?",
      answer:
        "Sim, você pode realizar uma avaliação sem conta. No entanto, recomendamos que você crie uma conta para ter acesso a recursos adicionais e para salvar suas avaliações.",
    },
    {
      question: "Posso realizar uma avaliação sem conta?",
      answer:
        "Sim, você pode realizar uma avaliação sem conta. No entanto, recomendamos que você crie uma conta para ter acesso a recursos adicionais e para salvar suas avaliações.",
    },
    {
      question: "Posso realizar uma avaliação sem conta?",
      answer:
        "Sim, você pode realizar uma avaliação sem conta. No entanto, recomendamos que você crie uma conta para ter acesso a recursos adicionais e para salvar suas avaliações.",
    },
    {
      question: "Posso realizar uma avaliação sem conta?",
      answer:
        "Sim, você pode realizar uma avaliação sem conta. No entanto, recomendamos que você crie uma conta para ter acesso a recursos adicionais e para salvar suas avaliações.",
    },
  ];

  return (
    <ContainerDefault className="py-6 md:py-[80px] flex-col">
      <div className="w-full flex md:hidden my-6">
        <Image
          src="/images/faq-img-mobile.webp"
          alt="faq-image"
          width={768}
          height={330}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-[32px] md:text-[56px] font-normal md:font-bold leading-[120%] tracking-[-1.1%] mb-3">
        Possui alguma dúvida?
      </h2>
      <p className="subtitle-section max-w-[712px] mb-6 md:mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s
      </p>

      <div className="flex flex-col md:flex-row items-start mt-6 gap-6 md:gap-20 w-full">
        <div className="md:w-1/2 hidden md:flex">
          <Image
            src="/images/faq-img.webp"
            alt="faq-image"
            width={590}
            height={712}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 w-full">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleAccordion={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between bg-[#F8F8F8] rounded-xl p-4 md:p-10 mt-6">
        <div>
          <h3 className="text-[24px] font-bold leading-[120%] tracking-[-0.4px]">
            Não encontrou a sua pergunta?
          </h3>
          <p className=" mt-2">
            Clique em entrar em contato e fale conosco, será um grande prazer.
          </p>
        </div>

        <Button variant="orange" className="w-full md:w-fit mt-4 md:mt-0">
          Entrar em contato
        </Button>
      </div>
    </ContainerDefault>
  );
};

export default Faq;
