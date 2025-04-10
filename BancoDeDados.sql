PGDMP      2        
        }            PetShop    17.4    17.4 @    {           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            |           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            }           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            ~           1262    49176    PetShop    DATABASE     o   CREATE DATABASE "PetShop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE "PetShop";
                     Admin    false            �            1259    57496    agendamento    TABLE     �   CREATE TABLE public.agendamento (
    id bigint NOT NULL,
    cliente character varying(255),
    data_hora timestamp(6) without time zone,
    servico character varying(255)
);
    DROP TABLE public.agendamento;
       public         heap r       Admin    false            �            1259    57495    agendamento_id_seq    SEQUENCE     �   ALTER TABLE public.agendamento ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.agendamento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    224            �            1259    57369    animais    TABLE     �   CREATE TABLE public.animais (
    id integer NOT NULL,
    descricao character varying(255),
    imagem character varying(255),
    nome_animal character varying(255),
    raca character varying(255),
    categoria_id integer,
    dono_id integer
);
    DROP TABLE public.animais;
       public         heap r       Admin    false            �            1259    57368    animais_id_seq    SEQUENCE     �   ALTER TABLE public.animais ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.animais_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    218            �            1259    57504 	   categoria    TABLE     h   CREATE TABLE public.categoria (
    id integer NOT NULL,
    titulo_categoria character varying(255)
);
    DROP TABLE public.categoria;
       public         heap r       Admin    false            �            1259    57510    categoria_animal    TABLE     t   CREATE TABLE public.categoria_animal (
    id integer NOT NULL,
    nome_categoria_animal character varying(255)
);
 $   DROP TABLE public.categoria_animal;
       public         heap r       Admin    false            �            1259    57509    categoria_animal_id_seq    SEQUENCE     �   ALTER TABLE public.categoria_animal ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.categoria_animal_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    228            �            1259    57503    categoria_id_seq    SEQUENCE     �   ALTER TABLE public.categoria ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.categoria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    226            �            1259    57516    endereco    TABLE     �   CREATE TABLE public.endereco (
    id integer NOT NULL,
    bairro character varying(255),
    cep character varying(255),
    cidade character varying(255),
    estado character varying(255),
    rua character varying(255)
);
    DROP TABLE public.endereco;
       public         heap r       Admin    false            �            1259    57515    endereco_id_seq    SEQUENCE     �   ALTER TABLE public.endereco ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.endereco_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    230            �            1259    57481    pet_registros    TABLE     �   CREATE TABLE public.pet_registros (
    id bigint NOT NULL,
    dono character varying(255),
    nome_pet character varying(255),
    nome_servico character varying(255),
    endereco_id integer
);
 !   DROP TABLE public.pet_registros;
       public         heap r       Admin    false            �            1259    57480    pet_registros_id_seq    SEQUENCE     �   ALTER TABLE public.pet_registros ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.pet_registros_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    222            �            1259    57524    produtos    TABLE     !  CREATE TABLE public.produtos (
    id integer NOT NULL,
    descricao character varying(255),
    imagem character varying(255),
    nome character varying(255),
    preco double precision NOT NULL,
    quantidade integer NOT NULL,
    categoria_id integer,
    subcategoria_id integer
);
    DROP TABLE public.produtos;
       public         heap r       Admin    false            �            1259    57523    produtos_id_seq    SEQUENCE     �   ALTER TABLE public.produtos ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.produtos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    232            �            1259    57532    servicos    TABLE     �   CREATE TABLE public.servicos (
    id integer NOT NULL,
    descricao character varying(255),
    imagem character varying(255),
    servico character varying(255),
    valor double precision
);
    DROP TABLE public.servicos;
       public         heap r       Admin    false            �            1259    57531    servicos_id_seq    SEQUENCE     �   ALTER TABLE public.servicos ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.servicos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    234            �            1259    57540    sub_categoria    TABLE     �   CREATE TABLE public.sub_categoria (
    id integer NOT NULL,
    titulo_sub_categoria character varying(255),
    categoria_id integer NOT NULL
);
 !   DROP TABLE public.sub_categoria;
       public         heap r       Admin    false            �            1259    57539    sub_categoria_id_seq    SEQUENCE     �   ALTER TABLE public.sub_categoria ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.sub_categoria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    236            �            1259    57427    usuarios    TABLE     +  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    nome character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    senha character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    endereco_id integer
);
    DROP TABLE public.usuarios;
       public         heap r       Admin    false            �            1259    57426    usuarios_id_seq    SEQUENCE     �   ALTER TABLE public.usuarios ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.usuarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               Admin    false    220            l          0    57496    agendamento 
   TABLE DATA           F   COPY public.agendamento (id, cliente, data_hora, servico) FROM stdin;
    public               Admin    false    224   �L       f          0    57369    animais 
   TABLE DATA           b   COPY public.animais (id, descricao, imagem, nome_animal, raca, categoria_id, dono_id) FROM stdin;
    public               Admin    false    218   M       n          0    57504 	   categoria 
   TABLE DATA           9   COPY public.categoria (id, titulo_categoria) FROM stdin;
    public               Admin    false    226   ,M       p          0    57510    categoria_animal 
   TABLE DATA           E   COPY public.categoria_animal (id, nome_categoria_animal) FROM stdin;
    public               Admin    false    228   �M       r          0    57516    endereco 
   TABLE DATA           H   COPY public.endereco (id, bairro, cep, cidade, estado, rua) FROM stdin;
    public               Admin    false    230   N       j          0    57481    pet_registros 
   TABLE DATA           V   COPY public.pet_registros (id, dono, nome_pet, nome_servico, endereco_id) FROM stdin;
    public               Admin    false    222   ,N       t          0    57524    produtos 
   TABLE DATA           q   COPY public.produtos (id, descricao, imagem, nome, preco, quantidade, categoria_id, subcategoria_id) FROM stdin;
    public               Admin    false    232   IN       v          0    57532    servicos 
   TABLE DATA           I   COPY public.servicos (id, descricao, imagem, servico, valor) FROM stdin;
    public               Admin    false    234   �P       x          0    57540    sub_categoria 
   TABLE DATA           O   COPY public.sub_categoria (id, titulo_sub_categoria, categoria_id) FROM stdin;
    public               Admin    false    236   �T       h          0    57427    usuarios 
   TABLE DATA           W   COPY public.usuarios (id, email, nome, role, senha, telefone, endereco_id) FROM stdin;
    public               Admin    false    220   `U                  0    0    agendamento_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.agendamento_id_seq', 2, true);
          public               Admin    false    223            �           0    0    animais_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.animais_id_seq', 1, false);
          public               Admin    false    217            �           0    0    categoria_animal_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.categoria_animal_id_seq', 1, false);
          public               Admin    false    227            �           0    0    categoria_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categoria_id_seq', 13, true);
          public               Admin    false    225            �           0    0    endereco_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.endereco_id_seq', 1, false);
          public               Admin    false    229            �           0    0    pet_registros_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pet_registros_id_seq', 1, false);
          public               Admin    false    221            �           0    0    produtos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.produtos_id_seq', 8, true);
          public               Admin    false    231            �           0    0    servicos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.servicos_id_seq', 12, true);
          public               Admin    false    233            �           0    0    sub_categoria_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.sub_categoria_id_seq', 13, true);
          public               Admin    false    235            �           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);
          public               Admin    false    219            �           2606    57502    agendamento agendamento_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT agendamento_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.agendamento DROP CONSTRAINT agendamento_pkey;
       public                 Admin    false    224            �           2606    57375    animais animais_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.animais
    ADD CONSTRAINT animais_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.animais DROP CONSTRAINT animais_pkey;
       public                 Admin    false    218            �           2606    57514 &   categoria_animal categoria_animal_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.categoria_animal
    ADD CONSTRAINT categoria_animal_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.categoria_animal DROP CONSTRAINT categoria_animal_pkey;
       public                 Admin    false    228            �           2606    57508    categoria categoria_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public                 Admin    false    226            �           2606    57522    endereco endereco_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.endereco DROP CONSTRAINT endereco_pkey;
       public                 Admin    false    230            �           2606    57487     pet_registros pet_registros_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.pet_registros
    ADD CONSTRAINT pet_registros_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.pet_registros DROP CONSTRAINT pet_registros_pkey;
       public                 Admin    false    222            �           2606    57530    produtos produtos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_pkey;
       public                 Admin    false    232            �           2606    57538    servicos servicos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.servicos
    ADD CONSTRAINT servicos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.servicos DROP CONSTRAINT servicos_pkey;
       public                 Admin    false    234            �           2606    57544     sub_categoria sub_categoria_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.sub_categoria
    ADD CONSTRAINT sub_categoria_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.sub_categoria DROP CONSTRAINT sub_categoria_pkey;
       public                 Admin    false    236            �           2606    57437 $   usuarios ukc7kjs7w63s5xc3icc3yc8f8y1 
   CONSTRAINT     f   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT ukc7kjs7w63s5xc3icc3yc8f8y1 UNIQUE (endereco_id);
 N   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT ukc7kjs7w63s5xc3icc3yc8f8y1;
       public                 Admin    false    220            �           2606    57489 )   pet_registros ukgs0irm1tc8ivtttwcbyqqnaak 
   CONSTRAINT     k   ALTER TABLE ONLY public.pet_registros
    ADD CONSTRAINT ukgs0irm1tc8ivtttwcbyqqnaak UNIQUE (endereco_id);
 S   ALTER TABLE ONLY public.pet_registros DROP CONSTRAINT ukgs0irm1tc8ivtttwcbyqqnaak;
       public                 Admin    false    222            �           2606    57435 $   usuarios ukkfsp0s1tflm1cwlj8idhqsad0 
   CONSTRAINT     `   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT ukkfsp0s1tflm1cwlj8idhqsad0 UNIQUE (email);
 N   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT ukkfsp0s1tflm1cwlj8idhqsad0;
       public                 Admin    false    220            �           2606    57433    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 Admin    false    220            �           2606    57550 )   pet_registros fk6d0rl2ua2pnxau7c8m4fjfbep    FK CONSTRAINT     �   ALTER TABLE ONLY public.pet_registros
    ADD CONSTRAINT fk6d0rl2ua2pnxau7c8m4fjfbep FOREIGN KEY (endereco_id) REFERENCES public.endereco(id);
 S   ALTER TABLE ONLY public.pet_registros DROP CONSTRAINT fk6d0rl2ua2pnxau7c8m4fjfbep;
       public               Admin    false    222    4806    230            �           2606    57555 $   produtos fkd7wr8emgsh5tcr7jtlnq71ri0    FK CONSTRAINT     �   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT fkd7wr8emgsh5tcr7jtlnq71ri0 FOREIGN KEY (categoria_id) REFERENCES public.categoria(id);
 N   ALTER TABLE ONLY public.produtos DROP CONSTRAINT fkd7wr8emgsh5tcr7jtlnq71ri0;
       public               Admin    false    226    232    4802            �           2606    57560 $   produtos fkeb6buu681e12xgfper0yws71p    FK CONSTRAINT     �   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT fkeb6buu681e12xgfper0yws71p FOREIGN KEY (subcategoria_id) REFERENCES public.sub_categoria(id);
 N   ALTER TABLE ONLY public.produtos DROP CONSTRAINT fkeb6buu681e12xgfper0yws71p;
       public               Admin    false    232    4812    236            �           2606    57570 $   usuarios fkisuw19r2dr9ptwfheclgvxhcd    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fkisuw19r2dr9ptwfheclgvxhcd FOREIGN KEY (endereco_id) REFERENCES public.endereco(id);
 N   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT fkisuw19r2dr9ptwfheclgvxhcd;
       public               Admin    false    220    4806    230            �           2606    57545 #   animais fkk14g27nalku1jt9y7cc1hy85g    FK CONSTRAINT     �   ALTER TABLE ONLY public.animais
    ADD CONSTRAINT fkk14g27nalku1jt9y7cc1hy85g FOREIGN KEY (categoria_id) REFERENCES public.categoria_animal(id);
 M   ALTER TABLE ONLY public.animais DROP CONSTRAINT fkk14g27nalku1jt9y7cc1hy85g;
       public               Admin    false    228    218    4804            �           2606    57443 "   animais fkpphquc99pmlrlg603ggsy5ms    FK CONSTRAINT     �   ALTER TABLE ONLY public.animais
    ADD CONSTRAINT fkpphquc99pmlrlg603ggsy5ms FOREIGN KEY (dono_id) REFERENCES public.usuarios(id);
 L   ALTER TABLE ONLY public.animais DROP CONSTRAINT fkpphquc99pmlrlg603ggsy5ms;
       public               Admin    false    4794    220    218            �           2606    57565 )   sub_categoria fkqyd18s33yesrwpl5mvk2uswtp    FK CONSTRAINT     �   ALTER TABLE ONLY public.sub_categoria
    ADD CONSTRAINT fkqyd18s33yesrwpl5mvk2uswtp FOREIGN KEY (categoria_id) REFERENCES public.categoria(id);
 S   ALTER TABLE ONLY public.sub_categoria DROP CONSTRAINT fkqyd18s33yesrwpl5mvk2uswtp;
       public               Admin    false    226    4802    236            l      x�3�� .#3F��� O�R      f      x������ � �      n   �   x�U�;
A���sq|[�66�Ȗ6q7h��Y'+�l���̊��#�?��T��8�E���3��!�� G���޾XqnD�'�L�.���9���3�n�'�����aͥ��}Ȩ"�zF*�H�y��jf�.O���a�F�XȺ9�ܰ�n�}���X�%E���w=D|�P+      p      x������ � �      r      x������ � �      j      x������ � �      t   �  x����n�0���)� ���k���TUU+uU)�.��kC��m�,"u�G��z��t&���9�+�W�_�gG}0��zZ��ڡ��fM��S ��Ѥ� ���l���7��Ͱ��6����o���d�b2gB1!Y��KY�s^�۪෥�;�����t�C z=?�H��V��"2I�]g,.��������v�O�~�z�h�0[��0��Y�B,��i�j/e�4��
��t��;��0�H�\�D�O*S���y'�7�Y��D2l��a�=tg��ϙ�LTL+�'�/�֚���m�w�~7-n�Ō�(�D�*��*���dG��6�	�����p����w�n1�sb.WL�L�t��M+^��h�-�&���sR!�����.t#��k���&������a�bl��Y�DG�rTL�K܊�BT'~��?���[��\$N�
)�������Cm�o�i6u�z��9�?Gw��a�{�ļy��4�R��<2�o~v���ut`ɝ�2�r�_by{d�Brlc6�ktv~qXP�p�}�
��O�g��/��0�aQ�(�3s���|��G"Z�{BE�lM�!�k ��pr����FB���M��.�4c�B�ݮ�kU�y~B��=�]�r)^��-��~��,��=��      v   �  x���͎�6���Sp�.����i�,
4HӬ
��FUR�<M�,-�U�'Ћ�\Ɏ����Ȥ���s�T���.ONԮZ�hH��RO|M����DO�� 1�`��_���>:�����n��`7��;�pt��:ֱTJ�JƹLٸ�]Vdy��7J�����}k�#��nվ���~�����������`����w� �M�m�5�~�;���:�N�Ri��
��r���퍷��SU��qu�|��0����e�����wI���ط<-ϐ�G
`;()�G�;hjZ�wBS�q�io�,d�e�6+W!lVTW�-�@�(Dy�K��.Ԙa�t��G'�q�0S�!��@�h��I̐��[T,W�Lƅ�Ԋ��eQ���
��Q�C΢W�@y2��	L���;��$�{��W[&��}��6�O�zSOUe��+�����7�He�.�،���������7,�5�������}Fxpa�;�y��]�5V@]�:)/�+��А�y�x�ωJ���f��q��x�;�O�`���f;��|?x�"~��myB���*.�m�P_��Z��y�K����"�r��6�Y�c����s�m�8�!j��O���T��;�N<3�6e�K��*ֳP�[��T�� �p�eK3�;��8�	G77����X��J��W�T�,��`��8AI�S1ta�rAGd���0��̈́	�6Y�������U@��bς��i%�MI��*��+8T�t��Ш_�d���<�)��dhNf�dO6�'�I�՗�nBy��hy�Mo6d��|cL�-������3�3R<i��S~ݝ���yj�&�����/6��#��2�����#�orƌ*�Rې�"�tqA��v�_���	I@`t
�_����3�c��      x   �   x�]�=�0Fg�="���T1 U��X4�J\���A8H/�[��}ϟmG�}'IM����l ��/�Q��~q�?B ?F6r�H�nJq���U).`���[j�w�z��j4�%l�bw���� �T��!Y��J�ZT�p���/,��B�f
[�Վ���ڑU+˞�Ѥ�k�F��x���IS��J�yP�D|"�_�      h   A   x�3�LL���s �z����� ��obqIj�����������������%��?�=... �2�     