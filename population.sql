insert into TB_CATEGORIAS (nome_categoria) values ('Novidades');
insert into TB_CATEGORIAS (nome_categoria) values ('Tecnologia');
insert into TB_CATEGORIAS (nome_categoria) values ('Rural');
insert into TB_CATEGORIAS (nome_categoria) values ('Utensílios');

insert into TB_TIPOTRANSACAO(nome_tipotransacao) values ('Cartão de Crédito');
insert into TB_TIPOTRANSACAO(nome_tipotransacao) values ('Cartão de Débito');
insert into TB_TIPOTRANSACAO(nome_tipotransacao) values ('PIX');
insert into TB_TIPOTRANSACAO(nome_tipotransacao) values ('Boleto');

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoCell', 200.0, 'images/produtos/bateria1.webp', '2024-01-01', 'Bateria de longa duração, ideal para reduzir o desperdício de pilhas descartáveis e promover um consumo consciente de energia.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoCharge', 220.0, 'images/produtos/bateria2.webp', '2024-01-01', 'Bateria recarregável, projetada para reduzir o desperdício de pilhas descartáveis e oferecer uma alternativa sustentável para o uso diário.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoShower', 100.0, 'images/produtos/chuveiro1.webp', '2024-01-01', 'Chuveiro de alta qualidade, projetado para proporcionar conforto e eficiência, ideal para um banho sustentável.', 1, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoStream', 150.0, 'images/produtos/chuveiro2.webp', '2024-01-01', 'Chuveiro com diversas funções para proporcionar um banho personalizado e eficiente, contribuindo para o consumo consciente de água.', 1, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('SolarMax', 1000.0, 'images/produtos/painelsolar1.webp', '2024-01-01', 'Painel solar de alta eficiência, ideal para captar energia solar de forma sustentável e econômica.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('SolarTech', 1200.0, 'images/produtos/painelsolar2.webp', '2024-01-01', 'Painel solar de longa durabilidade, projetado para captar energia solar de forma eficiente e sustentável.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoTractor', 30000.0, 'images/produtos/trator1.webp', '2024-01-01', 'Trator robusto e eficiente para agricultura, projetado para minimizar o impacto ambiental e aumentar a produtividade.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('SmartTractor', 32000.0, 'images/produtos/trator2.webp', '2024-01-01', 'Trator equipado com GPS para melhorar a precisão e eficiência nas atividades agrícolas, proporcionando sustentabilidade e produtividade.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('AutoPilotTractor', 34000.0, 'images/produtos/trator3.webp', '2024-01-01', 'Trator com piloto automático para operações agrícolas precisas e eficientes, contribuindo para uma agricultura mais sustentável e econômica.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Trator 4', 36000.0, 'images/produtos/trator4.webp', '2024-01-01', 'Trator com alta capacidade de carga, ideal para trabalhos pesados na agricultura, proporcionando eficiência e durabilidade.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Turbina Eólica V-Power', 5000.0, 'images/produtos/turbinaeolicaresidencial1.webp', '2024-01-01', 'Turbina eólica projetada para uso residencial, proporcionando energia limpa e renovável.', 1, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Turbina Eólica V8', 5200.0, 'images/produtos/turbinaeolica2.webp', '2024-01-01', 'Turbina eólica residencial com alta eficiência na geração de energia renovável.', 1, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Turbina Eólica V10', 5400.0, 'images/produtos/turbinaeolica3.webp', '2024-01-01', 'Turbina eólica residencial silenciosa, ideal para ambientes urbanos.', 1, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Turbina Eólica Simples', 5600.0, 'images/produtos/turbinaeolica4.webp', '2024-01-01', 'Turbina eólica residencial com controle remoto para fácil operação e ajuste.', 1, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Turbina Eólica', 5800.0, 'images/produtos/turbinaeolicaresidencial5.webp', '2024-01-01', 'Turbina eólica residencial resistente a intempéries, adequada para diversas condições climáticas.', 1, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Janela Inteligente', 500.0, 'images/produtos/janelainteligente.webp', '2024-01-01', 'Janela inteligente com controle remoto, ideal para automação residencial e eficiência energética.', 1, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Interruptor 1', 50.0, 'images/produtos/interruptor1.webp', '2024-01-01', 'Interruptor inteligente, proporciona controle de iluminação avançado e economia de energia.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Interruptor 2', 55.0, 'images/produtos/interruptor2.webp', '2024-01-01', 'Interruptor com sensor integrado, facilita o controle automático de iluminação.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Lâmpada LED 1', 20.0, 'images/produtos/lampadaled1.webp', '2024-01-01', 'Lâmpada LED econômica, proporciona economia de energia e longa vida útil.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Lâmpada LED 2', 25.0, 'images/produtos/lampadaled2.webp', '2024-01-01', 'Lâmpada LED de alta potência, oferece iluminação intensa e eficiente.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Lâmpada LED 3', 22.0, 'images/produtos/lampadaled3.webp', '2024-01-01', 'Lâmpada LED durável, ideal para uso residencial e comercial.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Lâmpada LED 4', 18.0, 'images/produtos/lampadaled4.webp', '2024-01-01', 'Lâmpada LED de baixo consumo, proporciona economia de energia e sustentabilidade.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Luminária Lunar', 19.0, 'images/produtos/lampadaled5.webp', '2024-01-01', 'Lâmpada LED inspirada na luz da lua, proporciona uma iluminação suave e relaxante.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) 
VALUES ('Aconchego Dourado', 21.0, 'images/produtos/lampadaled6.webp', '2024-01-01', 'Lâmpada LED com luz amarela quente para criar um ambiente acolhedor e confortável.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Drone Águia', 1200.0, 'images/produtos/drone1.webp', '2024-01-01', 'Drone com câmera 4K para capturar imagens nítidas e vídeos de alta definição.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Drone Navigator', 1300.0, 'images/produtos/drone2.webp', '2024-01-01', 'Drone equipado com GPS para navegação precisa e controle de localização.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Drone Voyager', 1400.0, 'images/produtos/drone3.webp', '2024-01-01', 'Drone de longo alcance que oferece maior autonomia e cobertura de área.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Drone Turbo', 1500.0, 'images/produtos/drone4.webp', '2024-01-01', 'Drone de alta velocidade ideal para capturas dinâmicas e manobras ágeis.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Drone Aquático', 1600.0, 'images/produtos/drone5.webp', '2024-01-01', 'Drone resistente à água, perfeito para operações em ambientes aquáticos.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Bateria Supercharged', 240.0, 'images/produtos/bateria3.webp', '2024-01-01', 'Bateria com alta capacidade de energia para uso prolongado.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Bateria PowerLith', 260.0, 'images/produtos/bateria4.webp', '2024-01-01', 'Bateria de lítio avançada que oferece desempenho otimizado e durabilidade.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Bateria EcoCharge', 280.0, 'images/produtos/bateria5.webp', '2024-01-01', 'Bateria portátil com design eco-friendly para carregamento conveniente.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Bateria FastCharge', 300.0, 'images/produtos/bateria6.webp', '2024-01-01', 'Bateria com tecnologia de carregamento rápido para uso eficiente.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Carregador Blitz', 20.0, 'images/produtos/carregador1.webp', '2024-01-01', 'Carregador rápido que proporciona carga rápida e eficiente.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Carregador Swift', 25.0, 'images/produtos/carregador2.webp', '2024-01-01', 'Carregador USB-C compacto e versátil para dispositivos modernos.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Carregador Wave', 30.0, 'images/produtos/carregador3.webp', '2024-01-01', 'Carregador sem fio que proporciona conveniência e liberdade de movimento.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Carregador Solaris', 35.0, 'images/produtos/carregador4.webp', '2024-01-01', 'Carregador solar sustentável que utiliza energia solar para recarga.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada Explorer', 50.0, 'images/produtos/lampadasolar1.webp', '2024-01-01', 'Lâmpada solar para áreas externas que oferece iluminação eficiente e sustentável.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada Sentinel', 55.0, 'images/produtos/lampadasolar2.webp', '2024-01-01', 'Lâmpada solar com sensor de movimento para segurança avançada.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada EcoLuz', 60.0, 'images/produtos/lampadasolar3.webp', '2024-01-01', 'Lâmpada solar de alta eficiência energética para economia de energia.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada Remote', 65.0, 'images/produtos/lampadasolar4.webp', '2024-01-01', 'Lâmpada solar com controle remoto para ajuste de intensidade luminosa.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada PowerPlus', 70.0, 'images/produtos/lampadasolar5.webp', '2024-01-01', 'Lâmpada solar com bateria recarregável para uso contínuo.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada Longlife', 75.0, 'images/produtos/lampadasolar6.webp', '2024-01-01', 'Lâmpada solar de longa duração para uso prolongado e eficiente.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada BrightWhite', 80.0, 'images/produtos/lampadasolar7.webp', '2024-01-01', 'Lâmpada solar com luz branca para iluminação clara e vibrante.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Relógio Pulse', 200.0, 'images/produtos/relogiosolar1.webp', '2024-01-01', 'Relógio solar de pulso com design moderno e funcionalidades avançadas.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('GPS Tracker', 220.0, 'images/produtos/relogiosolar2.webp', '2024-01-01', 'Relógio solar com GPS integrado para navegação precisa e monitoramento.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Relógio HeartBeat', 240.0, 'images/produtos/relogiosolar3.webp', '2024-01-01', 'Relógio solar com medidor de batimentos cardíacos para monitoramento da saúde.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada com Sensor', 30.0, 'images/produtos/lampadasensor1.webp', '2024-01-01', 'Lâmpada com sensor de movimento para automação e segurança.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada com Sensor Presence', 35.0, 'images/produtos/lampadasensor2.webp', '2024-01-01', 'Lâmpada com sensor de presença para detecção automática de ambiente.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada com Sensor de Luminosidade', 40.0, 'images/produtos/lampadasensor3.webp', '2024-01-01', 'Lâmpada com sensor de luminosidade para ajuste automático de intensidade.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada com Sensor Touch', 45.0, 'images/produtos/lampadasensor4.webp', '2024-01-01', 'Lâmpada com sensor de toque para controle intuitivo.', 2, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Lâmpada com Sensor de Calor', 50.0, 'images/produtos/lampadasensor5.webp', '2024-01-01', 'Lâmpada com sensor de calor para economia de energia.', 2, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Biorreator Agrícola', 5000.0, 'images/produtos/biorreator1.webp', '2024-01-01', 'Biorreator para produção agrícola com capacidade otimizada.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Biorreator Shell', 5200.0, 'images/produtos/biorreator2.webp', '2024-01-01', 'Biorreator com capacidade aumentada para produção intensiva.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Biorreator Eficiente', 5400.0, 'images/produtos/biorreator3.webp', '2024-01-01', 'Biorreator eficiente para culturas agrícolas.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Robô Agrícola', 7000.0, 'images/produtos/roboagricola1.webp', '2024-01-01', 'Robô agrícola especializado em colheita.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Robô Agrícola com GPS', 7200.0, 'images/produtos/roboagricola2.webp', '2024-01-01', 'Robô agrícola com sistema GPS para navegação precisa.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Robô Agrícola Plus', 7400.0, 'images/produtos/roboagricola3.webp', '2024-01-01', 'Robô agrícola equipado com sensor para detecção de obstáculos.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Sensor para Solo', 100.0, 'images/produtos/sensorumidade1.webp', '2024-01-01', 'Sensor de umidade para monitoramento do solo.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Sensor de Umidade', 120.0, 'images/produtos/sensorumidade2.webp', '2024-01-01', 'Sensor de umidade com medição precisa.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Sensor de Umidade Durável', 140.0, 'images/produtos/sensorumidade3.webp', '2024-01-01', 'Sensor de umidade durável para monitoramento contínuo.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Torre Vertical para Cultivo Vegetal', 2000.0, 'images/produtos/torreagricultura1.webp', '2024-01-01', 'Torre vertical para cultivo de vegetais com espaço otimizado.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Torre Vertical com Sistema de Irrigação', 2200.0, 'images/produtos/torreagricultura2.webp', '2024-01-01', 'Torre vertical com sistema integrado de irrigação para cultivo intensivo.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Torre Vertical Modular Torrent', 2400.0, 'images/produtos/torreagricultura3.webp', '2024-01-01', 'Torre vertical modular para expansão flexível do cultivo.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Estufa para Cultivo Agrícola', 2000.0, 'images/produtos/estufa1.webp', '2024-01-01', 'Estufa para cultivo agrícola protegido das condições climáticas.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Estufa com Controle de Temperatura', 2200.0, 'images/produtos/estufa2.webp', '2024-01-01', 'Estufa com sistema avançado de controle de temperatura.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Estufa de Alta Durabilidade', 2600.0, 'images/produtos/estufa4.webp', '2024-01-01', 'Estufa construída com materiais de alta durabilidade para longa vida útil.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cisterna Vertical com Alta Capacidade', 300.0, 'images/produtos/cisterna1.webp', '2024-01-01', 'Cisterna vertical com capacidade elevada para armazenamento de água.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cisterna Vertical com Sistema de Filtragem', 320.0, 'images/produtos/cisterna2.webp', '2024-01-01', 'Cisterna vertical equipada com sistema de filtragem avançado.', 3, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cisterna Vertical de Fácil Instalação', 340.0, 'images/produtos/cisterna3.webp', '2024-01-01', 'Cisterna vertical de fácil instalação para captação de água da chuva.', 3, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Máquina de Lavar Louça', 1500.0, 'images/produtos/maquinalouca.webp', '2024-01-01', 'Máquina de lavar louça eficiente para uso doméstico.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Mini Frigobar Portátil', 800.0, 'images/produtos/minifrigobar1.webp', '2024-01-01', 'Mini frigobar portátil para refrigeração de pequenas quantidades.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Purificador de Ar', 300.0, 'images/produtos/purificadorar.webp', '2024-01-01', 'Purificador de ar compacto para melhorar a qualidade do ar em ambientes internos.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cafeteira de Cápsulas', 100.0, 'images/produtos/cafeteira1.webp', '2024-01-01', 'Cafeteira que utiliza cápsulas para preparo de café.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cafeteira Expresso', 150.0, 'images/produtos/cafeteira2.webp', '2024-01-01', 'Cafeteira para preparo de café expresso.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cafeteira com Moedor', 200.0, 'images/produtos/cafeteira3.webp', '2024-01-01', 'Cafeteira que possui moedor integrado para grãos frescos.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Cafeteira Automática', 250.0, 'images/produtos/cafeteira4.webp', '2024-01-01', 'Cafeteira automática para preparo de café com praticidade.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Luminária Touch Field', 100.0, 'images/produtos/luminaria1.webp', '2024-01-01', 'Luminária touch com ajuste de intensidade luminosa.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Luminária Touch Ford', 120.0, 'images/produtos/luminaria2.webp', '2024-01-01', 'Luminária touch com opções de controle de cor da luz.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Medidor de Energia', 50.0, 'images/produtos/medidor1.webp', '2024-01-01', 'Medidor de consumo de energia elétrica para monitoramento residencial.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Medidor de Água', 55.0, 'images/produtos/medidor2.webp', '2024-01-01', 'Medidor de consumo de água para monitoramento residencial.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoGás', 60.0, 'images/produtos/medidor3.webp', '2024-01-01', 'Monitore seu consumo de gás com eficiência e sustentabilidade.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EnerSave', 65.0, 'images/produtos/medidor4.webp', '2024-01-01', 'Controle seu consumo de eletricidade com design moderno.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('SmartWater', 110.0, 'images/produtos/monitor2.webp', '2024-01-01', 'Monitore seu consumo de água em tempo real.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoPower', 100.0, 'images/produtos/monitor1.webp', '2024-01-01', 'Otimize seu consumo de energia com facilidade.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('GasGuard', 120.0, 'images/produtos/monitor3.webp', '2024-01-01', 'Monitore seu consumo de gás natural de maneira eficaz.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Wi-Fi Tracker', 140.0, 'images/produtos/monitor5.webp', '2024-01-01', 'Monitore seu consumo de energia com conectividade Wi-Fi.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('AppSaver', 150.0, 'images/produtos/monitor6.webp', '2024-01-01', 'Controle seu consumo de energia com um aplicativo intuitivo.', 4, 5);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('IntelliSocket 1', 12.0, 'images/produtos/tomada1.webp', '2024-01-01', 'Transforme seus aparelhos em dispositivos inteligentes.', 4, 1);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('PowerPlug 2', 16.0, 'images/produtos/tomada2.webp', '2024-01-01', 'Transforme sua casa em um ambiente conectado.', 4, 2);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('SmartSocket 3', 9.50, 'images/produtos/tomada3.webp', '2024-01-01', 'Automatize sua casa com controle via app.', 4, 4);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('EcoPlug 4', 15.0, 'images/produtos/tomada4.webp', '2024-01-01', 'Controle seus dispositivos e economize energia.', 4, 3);

INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto)
VALUES ('Wi-Fi Power Socket 5', 22.0, 'images/produtos/tomada5.webp', '2024-01-01', 'Gerencie seus aparelhos eletrônicos com praticidade.', 4, 5);
