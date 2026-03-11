"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonSquare from "../global/ButtonSquare";
import ContainerDefault from "../global/ContainerDefault";
import SectionHeader from "../global/SectionHeader";
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
    <div className="mt-16 md:mt-32">
      <SectionHeader
        title="Possui alguma dúvida?"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        action={<></>}
      />
      <ContainerDefault className="flex-col border-vertical ">
        <div className="w-full flex md:hidden my-6">
          <Image
            src="/images/faq-img-mobile.webp"
            alt="faq-image"
            width={768}
            height={330}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row items-stretch mt-6 gap-6 md:gap-20 w-full">
          <div className="relative md:w-1/2 w-full hidden md:block md:h-[720px]">
            <Image
              src="/svg/fade-green.svg"
              alt="Imagem de destaque"
              fill
              className="object-cover"
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
      </ContainerDefault>
      <div className="border-horizontal">
        <ContainerDefault className="flex-col border-vertical ">
          <div className="flex flex-col md:flex-row md:justify-between bg-[#F8F8F8] rounded-xl py-10 px-6 md:px-10">
            <div>
              <h3 className="text-[24px] font-bold leading-[120%] tracking-[-0.4px]">
                Não encontrou a sua pergunta?
              </h3>
              <p className=" mt-2">
                Clique em entrar em contato e fale conosco, será um grande prazer.
              </p>
            </div>

            <ButtonSquare variant="primary" className="w-full md:w-fit mt-4 md:mt-0">
              Entrar em contato
            </ButtonSquare>
          </div>
        </ContainerDefault>
      </div>
    </div>
  );
};

export default Faq;
